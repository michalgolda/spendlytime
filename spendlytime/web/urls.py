from django.urls import path
from spendlytime.web import views

urlpatterns = [
    path('', views.index)
]