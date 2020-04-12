from tests.base import BaseViewTestCase
from spendlytime.web.frontend.auth import AuthLoginView, AuthRegisterView
from spendlytime.web.forms.auth import LoginForm, RegisterForm


class TestAuthViews(BaseViewTestCase):

    def test_login(self):
        request = self.factory.get('/auth/login/')
        # Set anonymous user for representant user
        request.user = self.anonymous_user
        response = AuthLoginView.as_view()(request)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(AuthLoginView.auth_required, False)

    def test_register(self):
        request = self.factory.get('/auth/register/')
        # Set anpnymous user for representant user
        request.user = self.anonymous_user
        response = AuthRegisterView.as_view()(request)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(AuthRegisterView.auth_required, False)