from rest_framework.authentication import BaseAuthentication


class SessionAuthentication(BaseAuthentication):
    """
    The auth class for api, because default rest_framework SessionAuthentication class,
    is required csrftoken this class is not required.
    """

    def authenticate(self, request):
        """
        Returns a `User` if the request session currently has a logged in user.
        Otherwise returns `None`.
        """

        # Get the session-based user from the underlying HttpRequest object
        user = getattr(request._request, 'user', None)

        # Unauthenticated, CSRF validation not required
        if not user or not user.is_active:
            return None

        # CSRF passed with authenticated user
        return (user, None)
