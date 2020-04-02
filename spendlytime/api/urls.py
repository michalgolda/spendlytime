from django.urls import path
from rest_framework import routers
from spendlytime.api import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'traces', views.TraceViewSet)

urlpatterns = []
urlpatterns += router.urls