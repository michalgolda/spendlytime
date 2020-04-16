from django.db import models
from django.contrib.auth.models import User


class Trace(models.Model):
    """
    Base model of Trace
    """
    trace_url = models.CharField(max_length=150)
    duration = models.IntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        """The function is return trace url for this model

        Example:
            > str(trace_obj)
            > https://google.com
        """
        return f"{self.trace_url}"

class TimeEntry(models.Model):
    start = models.DateTimeField()
    stop = models.DateTimeField(blank=True, null=True)

    duration = models.IntegerField(default=0)

    tid = models.IntegerField()