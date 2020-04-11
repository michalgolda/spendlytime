from django.urls import path, include

from spendlytime.web.frontend.react import GenericReactPage
from spendlytime.web.frontend.auth import AuthLoginView, AuthRegisterView

urlpatterns = [
    path('traces/', GenericReactPage.as_view(), name="main"),
    path('auth/', include([
        path('login/', AuthLoginView.as_view(), name="auth-login"),
        path('register/', AuthRegisterView.as_view(), name="auth-register")
    ]))
]