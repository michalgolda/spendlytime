from typing import Union

from django.http import HttpRequest

from django.contrib.auth.models import User
from django.contrib.auth.backends import BaseBackend
from django.contrib.auth.hashers import check_password


class EmailAuthBackend(BaseBackend):
    """
    The backend is using email and password for authentication user
    """

    def authenticate(self, request: HttpRequest, email: str = None, password: str = None) -> Union[User, None]:
        try:
            user = User.objects.get(email=email)
            if user.check_password(password):
                return user
        except User.DoesNotExist:
            return None

    def get_user(self, pk):
        """
        This field is required for authentication beacause authentication middleware is not set a request.user
        """
        try:
            return User.objects.get(id=pk)
        except User.DoesNotExist:
            return None