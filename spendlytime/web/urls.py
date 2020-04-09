from django.urls import path, include
from spendlytime.web.frontend.react import ReactView

urlpatterns = [
    path('', ReactView.as_view()),
    path('auth/', include([
        path('login/', ReactView.as_view()),
        path('register/', ReactView.as_view())
    ]))
]