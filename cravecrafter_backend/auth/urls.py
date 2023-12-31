# For api/ URLS
from django.urls import path, re_path
from . import views

from rest_framework_simplejwt.views import (TokenRefreshView,)

urlpatterns = [
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
]