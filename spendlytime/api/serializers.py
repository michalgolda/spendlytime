from spendlytime import models
from rest_framework import serializers
from django.contrib.auth.models import User


class TraceSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(
        write_only=True,
        default=serializers.CurrentUserDefault()
    )
    class Meta:
        model = models.Trace
        fields = ['id', 'trace_url', 'trace_time', 'created_at', 'updated_at', 'user_id', 'user']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'is_staff', 'is_active', 'date_joined', 'last_login']