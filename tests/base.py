from unittest import TestCase, skip
from rest_framework.test import APITestCase
from django.contrib.auth.models import User


class BaseTestCase(TestCase):
    """The wrapper for TestCase class"""
    pass


class BaseAPITestCase(APITestCase):
    """The wrapper for APITestCase class"""

    def setUp(self):
        """Create test user if not exist for set up test case and login client"""
        self.user = None
        has_user = User.objects.filter(username="test")
        if not has_user:
            self.user = User.objects.create_user(
                username="test", password="test")
            self.client.login(username="test", password="test")

    def tearDown(self):
        """Delete user object on tear down test case"""
        self.user.delete()
        del self.user
