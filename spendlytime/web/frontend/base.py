from django.views.generic import View
from django.http import HttpRequest

from spendlytime.web.helpers import render_to_response


class BaseView(View):

    def dispatch(self, request, *args, **kwargs):
        self.request = request

        return self.handle(request, *args, **kwargs)

    def handle(self, request, *args, **kwargs):
        return super(BaseView, self).dispatch(request, *args, **kwargs)

    def respond(self, template_name: str, context: dict = None, status: int = 200):
        """
        This function is rendering template with context
        """

        return render_to_response(template_name, context, self.request, status=status)
