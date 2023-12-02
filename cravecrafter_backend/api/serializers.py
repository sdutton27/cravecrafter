from rest_framework import serializers
from .models import Restaurant, MenuItem
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password 
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ('id', 'name', 'img_url')

class MenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuItem
        fields = ('id', 'name', 'price_in_cents', 'img_url', 'description', 'favoriters', 'restaurant_with_menu')