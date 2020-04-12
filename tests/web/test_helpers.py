from tests.base import BaseViewTestCase
from django.conf import settings
from spendlytime.web.helpers import get_client_config


class TestHelpers(BaseViewTestCase):
    """
    This class is using BaseViewTestCase class for use request factory,
    required for test helpers
    """

    def test_get_client_config_if_user_is_authenticated(self):
        request = self.factory.get('')

        # Test when if request user is not authenticated
        request.user = self.anonymous_user
        client_config = get_client_config(request)

        self.assertIn("userIdentity", client_config)
        self.assertIn("csrfCookieName", client_config)
        self.assertIn("isAuthenticated", client_config)
        self.assertIn("ip_address", client_config["userIdentity"])

        self.assertEqual(client_config["isAuthenticated"], False)
        self.assertEqual(client_config["csrfCookieName"], settings.CSRF_COOKIE_NAME)

    def test_get_client_config_if_user_is_not_authenticated(self):
        request = self.factory.get('')

        # Test when if request user is not authenticated
        request.user = self.user
        client_config = get_client_config(request)

        self.assertIn("userIdentity", client_config)
        self.assertIn("csrfCookieName", client_config)
        self.assertIn("isAuthenticated", client_config)
        self.assertIn("ip_address", client_config["userIdentity"])

        self.assertEqual(client_config["isAuthenticated"], True)
        self.assertEqual(client_config["csrfCookieName"], settings.CSRF_COOKIE_NAME)
