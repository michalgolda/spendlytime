from tests.base import BaseViewTestCase
from spendlytime.web.frontend.base import BaseView


class TestBaseView(BaseViewTestCase):

    def test_handle_auth_required(self):
        request = self.factory.get('/')
        # Set anonymous user for represent request
        request.user = self.anonymous_user
        response = BaseView.as_view()(request)
        # Test redirect if user is not authenticated
        self.assertEqual(response.status_code, 302)
        # Test default auth_required variable
        self.assertEqual(BaseView.auth_required, True)