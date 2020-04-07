from django.contrib.auth.models import User

from rest_framework.views import APIView
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.status import HTTP_400_BAD_REQUEST
from rest_framework.authentication import SessionAuthentication
from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet

from rest_framework.authtoken.models import Token
from rest_framework.authtoken.serializers import AuthTokenSerializer

from spendlytime import models
from spendlytime.api import serializers


class TraceViewSet(ModelViewSet):
    """
    The trace view, return all traces from current session user
    and afford a create new trace
    """
    queryset = models.Trace.objects.all()
    serializer_class = serializers.TraceSerializer
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]


class UserViewSet(ReadOnlyModelViewSet):
    """
    The user view, return all users
    """
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]

    @action(detail=True)
    def traces(self, request, pk=None):
        traces = models.Trace.objects.filter(user_id=pk)
        serializer = serializers.TraceSerializer(traces, many=True)

        return Response(serializer.data)

    @action(detail=False)
    def me(self, request):
        serializer = serializers.UserSerializer(instance=request.user)
        return Response(serializer.data)



class TokenApiView(APIView):
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