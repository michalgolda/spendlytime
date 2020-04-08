from tests.base import BaseAPITestCase
from rest_framework.status import HTTP_200_OK


class TestTokenApiView(BaseAPITestCase):

    def test_creation_token(self):
        response = self.client.post('/api/auth/token/')

        self.assertEqual(response.status_code, HTTP_200_OK)
        self.assertNotEqual(response.data['api-token'], "")