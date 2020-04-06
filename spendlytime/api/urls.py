from django.urls import path, include
from rest_framework import routers
from spendlytime.api import views

# The root router for rest framework, return a api gui interface but only development mode
# This variable is UPPER CASE because pep8 dedicated a use for this situation
ROUTER = routers.DefaultRouter()
ROUTER.register(r'users', views.UserViewSet)
ROUTER.register(r'traces', views.TraceViewSet)

# All routers without view sets
urlpatterns = [
    path('auth/', include([
        path('token/', views.ApiTokenView.as_view())
    ]))
]
urlpatterns += ROUTER.urls
