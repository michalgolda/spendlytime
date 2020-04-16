from django.contrib import admin
from spendlytime import models

# Register your models here.
admin.site.register(models.Trace)
admin.site.register(models.TimeEntry)