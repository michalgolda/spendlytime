from django.contrib.auth.models import User

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import SessionAuthentication
from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet

from rest_framework.authtoken.models import Token
from rest_framework.authtoken.serializers import AuthTokenSerializer

from spendlytime import models
from spendlytime.api import serializers


class TraceListAPIView(APIView):
    """
    The trace view, return all traces from current session user
    and afford a create new trace
    """
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, pk=None):
        current_user = request.user
        if not pk:
            traces = models.Trace.objects.filter(user_id=current_user.id).all()
        else:
            traces = models.Trace.objects.filter(
                id=pk, user_id=current_user.id)
            if not traces:
                return Response([], status.HTTP_404_NOT_FOUND)

        serializer = serializers.TraceSerializer(traces, many=True)

        return Response(serializer.data)

    def post(self, request):
        serializer = serializers.TraceSerializer(
            context={'request': request}, data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status.HTTP_201_CREATED)
        else:
            errors = serializer.errors

            return Response(errors, status.HTTP_400_BAD_REQUEST)


class MeAPIView(APIView):
    """
    This view is returing current user.
    """
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        current_user = request.user
        user = User.objects.filter(id=current_user.id)
        serializer = serializers.UserSerializer(user, many=True)

        return Response(serializer.data)


class TokenAPIView(APIView):
    """
    The api token view class, generating a auth token
    """
    allowed_methods = ["POST"]
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        # Get current user session
        current_user = request.user
        # Create token if not exist of current user but exist return token
        token = Token.objects.get_or_create(user=current_user)
        return Response({"api-token": str(token[0])})
