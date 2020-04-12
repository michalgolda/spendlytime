from unittest import TestCase, skip
from rest_framework.test import APITestCase

from django.test import RequestFactory
from django.contrib.auth.models import User, AnonymousUser


class BaseTestCase(TestCase):
    """The wrapper for TestCase class"""
    pass


class BaseAPITestCase(APITestCase):
    """The wrapper for APITestCase class"""

    def setUp(self):
        """Create test user if not exist for set up test case and login client"""
        self.user = None
        has_user = User.objects.filter(email="test").first()
        if not has_user:
            self.user = User.objects.create_user(
                username="test",
                email="test",
                password="test"
            )
        else:
            self.user = has_user

        self.client.login(email="test", password="test")

    def tearDown(self):
        """Delete user object on tear down test case"""
        self.user.delete()
        del self.user


class BaseViewTestCase(BaseTestCase):
    """
    The base test class for views
    """

    def setUp(self):
        # Create all required variables for test any view
        self.factory = RequestFactory()
        self.user = User.objects.create_user(
            username="test",
            email="test@test.pl",
            password="test123"
        )
        # This user simulating a unauthorized user
        self.anonymous_user = AnonymousUser()

    def tearDown(self):
        self.user.delete()
        del self.user
        del self.factory
        del self.anonymous_user