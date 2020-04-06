from tests.base import BaseAPITestCase
from rest_framework.status import HTTP_200_OK
from django.contrib.auth.models import User


class TestUserApiView(BaseAPITestCase):

    def test_get_all_users(self):
        response = self.client.get("/api/users/")

        self.assertEqual(response.status_code, HTTP_200_OK)

    def test_get_user_by_id(self):
        response = self.client.get("/api/users/1/")

        self.assertEqual(response.status_code, HTTP_200_OK)
