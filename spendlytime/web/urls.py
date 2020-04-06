from django.urls import path
from spendlytime.web.frontend.react import ReactView

urlpatterns = [
    path('', ReactView.as_view())
]