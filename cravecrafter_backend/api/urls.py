# # For api/ URLS
from django.urls import path, re_path
from . import views

urlpatterns = [
    path('favorites/restaurants', views.getFavoriteRestaurants),
    path('favorites/menu_items', views.getFavoriteMenuItems),
    path(r'restaurant/?P<id>\d+/menu', views.getRestaurantMenu)
]