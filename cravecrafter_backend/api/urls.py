# # For api/ URLS
from django.urls import path, re_path
from . import views

urlpatterns = [
    path('favorites/restaurants', views.getFavoriteRestaurants)
]