from django.conf import settings
from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse, HttpRequest


def render_to_string(
        template_name: str,
        context: dict = None,
        request: HttpRequest = None) -> str:
    """
    The render template with context
    """

    return loader.render_to_string(template_name, context=context, request=request)


def render_to_response(
        template_name: str,
        context: dict = None,
        request: HttpRequest = None,
        status: int = 200,
        content_type: str = "text/html") -> HttpResponse:
    """
    Create http response from rendered template
    """

    response = HttpResponse(render_to_string(template_name, context, request))
    response.status_code = status
    response["Content-Type"] = content_type
    return response


def get_client_config(request: HttpRequest = None) -> dict:
    """
    Init context to inject frontend application
    """
    if request is not None:
        user = getattr(request, "user", None)
        user_identity = {"ip_address": request.META["REMOTE_ADDR"]}
        if user and user.is_authenticated:
            user_identity.update({"id": user.id, "email": user.email})
            if user.username:
                user_identity["username"] = user.username
    else:
        user = None
        user_identity = None

    context = {
        "userIdentity": user_identity,
        "csrfCookieName": settings.CSRF_COOKIE_NAME
    }
    if user and user.is_authenticated:
        context.update({"isAuthenticated": True})
    else:
        context.update({"isAuthenticated": False})

    return context
