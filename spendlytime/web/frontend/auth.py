from django.urls import reverse
from django.http import HttpResponseRedirect
from django.contrib.auth import authenticate, login

from spendlytime.web.frontend.base import BaseView
from spendlytime.web.forms.auth import LoginForm, RegisterForm


class AuthLoginView(BaseView):
    """
    The view is implementing login process
    """
    auth_required = False

    def respond_login(self, request, context, **kwargs):
        return self.respond("spendlytime/login.html", context)

    def get_form(self, request=None):
        return LoginForm(request.POST if request else None)

    def get(self, request, *args, **kwargs):
        context = {
            "form": self.get_form(request)
        }

        return self.respond_login(request, context, **kwargs)

    def post(self, request, *args, **kwargs):
        form = self.get_form(request)
        if form.is_valid():
            user = authenticate(request, email=request.POST.get(
                "email"), password=request.POST.get("password"))
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
        else:
            form = self.get_form(request)
            context = {
                "form": form
            }
            return self.respond_login(request, context, **kwargs)


class AuthRegisterView(BaseView):
    """
    This view is implementing user creation process
    """
    auth_required = False

    def respond_register(self, request, context, **kwargs):
        return self.respond("spendlytime/register.html", context)

    def get_form(self, request=None):
        return RegisterForm(request.POST if request else None)

    def get(self, request, *args, **kwargs):
        context = {
            "form": self.get_form(request)
        }

        return self.respond_register(request, context, **kwargs)

    def post(self, request, *args, **kwargs):
        form = self.get_form(request)
        if form.is_valid():
            user = form.save()
            return HttpResponseRedirect(reverse("home"))
        else:
            form = self.get_form(request)
            context = {
                "form": form
            }
            return self.respond_register(request, context, **kwargs)
