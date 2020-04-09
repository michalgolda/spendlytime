from spendlytime.web.frontend.base import BaseView
from spendlytime.web.forms.authentication import AuthtenticationForm
from spendlytime.web.forms.user import UserCreationForm


class AuthLoginView(BaseView):

    def respond_login(self, request, context, **kwargs):
        return self.respond("spendlytime/login.html", context)

    def get_form(self, request):
        return AuthtenticationForm(request.POST)

    def get(self, request, *args, **kwargs):
        context = {
            "form": self.get_form(request)
        }

        return self.respond_login(request, context, **kwargs)

class AuthRegisterView(BaseView):

    def respond_login(self, request, context, **kwargs):
        return self.respond("spendlytime/register.html", context)

    def get_form(self, request):
        return UserCreationForm(request.POST)

    def get(self, request, *args, **kwargs):
        context = {
            "form": self.get_form(request)
        }

        return self.respond_login(request, context, **kwargs)