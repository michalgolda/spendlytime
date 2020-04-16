from datetime import timedelta, datetime

from django.utils import timezone
from django.http import Http404
from django.contrib.auth.models import User

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import APIException

from rest_framework.authtoken.models import Token
from rest_framework.authtoken.serializers import AuthTokenSerializer

from spendlytime.models import Trace, TimeEntry
from spendlytime.api import serializers


class TraceListAPIView(APIView):
    """
    The trace view, return all traces from current session user
    and afford a create new trace
    """
    permission_classes = [IsAuthenticated]

    def get_object(self, pk):
        try:
            return Trace.objects.get(id=pk)
        except Trace.DoesNotExist:
            raise Http404

    def get(self, request, pk=None):
        current_user = request.user
        if not pk:
            traces = Trace.objects.filter(user_id=current_user.id).all()
        else:
            trace = Trace.objects.filter(id=pk, user_id=current_user.id).first()
            if not trace:
                raise Http404

            serializer = serializers.TraceSerializer(trace)

            return Response(serializer.data)

        serializer = serializers.TraceSerializer(traces, many=True)

        return Response(serializer.data)

    def post(self, request):
        serializer = serializers.TraceSerializer(
            context={"request": request}, data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status.HTTP_201_CREATED)
        else:
            errors = serializer.errors

            return Response(errors, status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None):
        trace = self.get_object(pk)
        trace.delete()

        return Response(status=status.HTTP_200_OK)


class MeAPIView(APIView):
    """
    This view is returing current user.
    """
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
    permission_classes = [IsAuthenticated]

    def post(self, request):
        # Get current user session
        current_user = request.user
        # Create token if not exist of current user but exist return token
        token = Token.objects.get_or_create(user=current_user)
        return Response({"api-token": str(token[0])})


class TimeEntriesAPIView(APIView):
    # permission_classes = [IsAuthenticated]

    def get_trace_object(self, pk: int):
        try:
            return Trace.objects.get(id=pk)
        except Trace.DoesNotExist:
            raise Http404

    def get_time_entry_object(self, pk: int):
        try:
            return TimeEntry.objects.get(id=pk)
        except TimeEntry.DoesNotExist:
            raise Http404

    def post(self, request):
        serializer = serializers.TimeEntryStartSerializer(data=request.data)
        if serializer.is_valid():
            trace = self.get_trace_object(serializer.data["tid"])

            time_entry = TimeEntry()
            time_entry.start = serializer.data["start"]
            time_entry.tid = trace.id
            time_entry.save()

            serializer = serializers.TimeEntrySerializer(time_entry)

            return Response(serializer.data)
        else:
            errors = serializer.errors
            return Response(errors, status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk: int = None):
        if not pk:
            raise Http404

        serializer = serializers.TimeEntryStopSerializer(data=request.data)
        if serializer.is_valid():
            trace = self.get_trace_object(serializer.data["tid"])
            time_entry = self.get_time_entry_object(pk)

            time_entry.stop = serializer.data["stop"]
            time_entry.duration = serializer.data["duration"]
            trace.duration += serializer.data["duration"]
            trace.save()
            time_entry.save()
            
            serializer = serializers.TimeEntrySerializer(time_entry)

            return Response(serializer.data)
        else:
            errors = serializer.errors
            return Response(errors, status.HTTP_400_BAD_REQUEST)
