from rest_framework import serializers
from .models import Restaurant, Menu, MenuItem
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password 
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ('id', 'name', 'img_url', 'open_now')

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = ('id', 'restaurant')

class MenuItemSerializer(serializers.ModelSerializer):
    menu_for_item = serializers.SlugRelatedField(read_only=True, slug_field='menu.restaurant')
    class Meta:
        model = MenuItem
        # Check these for the fields
        fields = ('id', 'name', 'price_in_cents', 'img_url', 'description', 'favoriters', 
                  'menu_for_item', 'available')

