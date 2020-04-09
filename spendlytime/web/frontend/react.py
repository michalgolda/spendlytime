from django.conf import settings
from django.middleware.csrf import get_token as get_csrf_token

from spendlytime.web.frontend.base import BaseView
from spendlytime.web.helpers import render_to_response


class ReactMixin(object):
    def handle_react(self, request):
        context = {"CSRF_COOKIE_NAME": settings.CSRF_COOKIE_NAME}

        get_csrf_token(request)

        return render_to_response("spendlytime/bases/react.html", context=context, request=request)


class GenericReactPage(BaseView, ReactMixin):
    def handle(self, request, **kwargs):
        return self.handle_react(request)