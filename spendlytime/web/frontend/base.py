from django.urls import reverse
from django.shortcuts import redirect
from django.views.generic import View
from django.http import HttpRequest, HttpResponseRedirect, HttpResponse

from spendlytime.web.helpers import render_to_response


class BaseView(View):
    auth_required = True

    def dispatch(self, request, *args, **kwargs):
        if self.is_auth_required(request):
            return self.handle_auth_required(request)

        self.request = request

        return self.handle(request, *args, **kwargs)

    def handle(self, request, *args, **kwargs):
        return super(BaseView, self).dispatch(request, *args, **kwargs)

    def respond(self, template_name: str, context: dict = None, status: int = 200):
        """
        This function is rendering template with context
        """

        return render_to_response(template_name, context, self.request, status=status)

    def handle_auth_required(self, request):
        return HttpResponseRedirect(reverse("auth-login"))

    def is_auth_required(self, request):
        return self.auth_required and not (request.user.is_authenticated and request.user.is_active)