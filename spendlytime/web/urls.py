from django.urls import path, include

from spendlytime.web.frontend.react import GenericReactPage
from spendlytime.web.frontend.auth import AuthLoginView, AuthRegisterView

urlpatterns = [
    path('', GenericReactPage.as_view()),
    path('auth/', include([
        path('login/', AuthLoginView.as_view()),
        path('register/', AuthRegisterView.as_view())
    ]))
]