from django.db import models
from django.contrib.auth.models import User


class Trace(models.Model):
    trace_url = models.CharField(max_length=150)
    trace_time = models.TimeField()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    user = models.ForeignKey(User, on_delete=models.CASCADE)