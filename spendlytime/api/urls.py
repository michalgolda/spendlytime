from django.urls import path, include
from spendlytime.api import views

# All routers without view sets
urlpatterns = [
    path('auth/', include([
        path('token/', views.TokenAPIView.as_view(), name="api-auth-token")
    ])),
    path('traces/', include([
        path('', views.TraceListAPIView.as_view(), name="api-traces"),
        path('<int:pk>/', views.TraceListAPIView.as_view(), name="api-trace-by-id")
    ])),
    path('users/', include([
        path('me/', views.MeAPIView.as_view(), name="api-me")
    ]))
]
