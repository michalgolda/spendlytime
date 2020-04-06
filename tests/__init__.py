# This code is required for unittest finding without "python manage.py test".
import os
from django import setup as django_setup

# Set DJANGO_SETTINGS_MODULE, from which loading all settings parameters
os.environ['DJANGO_SETTINGS_MODULE'] = "settings"

# This function is running django setup
django_setup()
