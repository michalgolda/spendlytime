from spendlytime import models
from rest_framework import serializers
from django.contrib.auth.models import User


class TraceSerializer(serializers.ModelSerializer):
    """
    The trace serializer foreign key to user model and add user_id field
    """
    user = serializers.HiddenField(
        write_only=True,
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = models.Trace
        fields = ['id', 'trace_url', 'trace_time',
                  'created_at', 'updated_at', 'user_id', 'user']


class UserSerializer(serializers.ModelSerializer):
    """
    The user serializer serialize django user model
    """
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'is_staff',
                  'is_active', 'date_joined', 'last_login']
