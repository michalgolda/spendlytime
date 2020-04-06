from django.contrib.auth.models import User

from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import SessionAuthentication

from spendlytime import models
from spendlytime.api import serializers


class TraceViewSet(viewsets.ModelViewSet):
    """
    The trace view, return all traces from current session user
    and afford a create new trace
    """
    queryset = models.Trace.objects.all()
    serializer_class = serializers.TraceSerializer
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]


class UserViewSet(viewsets.ReadOnlyModelViewSet):
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
