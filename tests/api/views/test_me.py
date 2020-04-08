from tests.base import BaseAPITestCase
from rest_framework.status import HTTP_200_OK
from django.contrib.auth.models import User


class TestMeApiView(BaseAPITestCase):

    def test_get_all_users(self):
        response = self.client.get("/api/users/me/")

        self.assertEqual(response.status_code, HTTP_200_OK)
