from django.urls import reverse
from django.http import HttpResponseRedirect
from django.contrib.auth import authenticate, login

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

    def post(self, request, *args, **kwargs):
        form = AuthtenticationForm(request.POST)
        if form.is_valid():
            user = authenticate(request, username=request.POST.get("email"), password=request.POST.get("password"))
            if user is not None:
                login(request, user)

                return HttpResponseRedirect(reverse("home"))
            else:
                form = self.get_form(request)
                form.add_error(None, "Oops. Nieprawidłowy email lub hasło.")
                context = {
                    "form": form
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