from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status, viewsets
from .models import Restaurant, Menu, MenuItem
from rest_framework.decorators import api_view , permission_classes 
from django.http import HttpResponse
from api.serializers import RestaurantSerializer, MenuItemSerializer, MenuSerializer
from django.core.serializers import serialize

# Restaurant
class RestaurantView(viewsets.ModelViewSet):
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getFavoriteRestaurants(request):
    if request.method == 'GET':
        queryset = Restaurant.objects.filter(favoriters__id=request.user.id)
        data = serialize("json", queryset, fields=('id', 'name', 'img_url', 'open_now'))
        return HttpResponse(data, content_type="application/json")
    
    return Response("This is a GET method", status.HTTP_400_BAD_REQUEST)

# Menu
class MenuView(viewsets.ModelViewSet):
    serializer_class = MenuSerializer
    queryset = Menu.objects.all()

# Menu Item
class MenuItemView(viewsets.ModelViewSet):
    serializer_class = MenuItemSerializer
    queryset = MenuItem.objects.all()

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getFavoriteMenuItems(request):
    if request.method == 'GET':
        queryset = MenuItem.objects.filter(favoriters__id=request.user.id)
        # Check this for getting the restaurant from a menu item
        data = serialize("json", queryset, fields=('id', 'name', 'price_in_cents', 
                                                   'img_url', 'description', 'menu_for_item',
                                                   'available'))
        return HttpResponse(data, content_type="application/json")
    
    return Response("This is a GET method", status.HTTP_400_BAD_REQUEST)

# @api_view(['GET'])
# def getRestaurantMenu(restaurant_id, request):
#     if request.method == 'GET':
#         queryset = MenuItem.objects.filter(restaurant_with_menu__id=restaurant_id)
#         data = serialize("json", queryset, fields=('id', 'name', 'price_in_cents', 'img_url', 'description', 'restaurant_with_menu__name'))
#         return HttpResponse(data, content_type="application/json")
    
#     return Response("This is a GET method", status.HTTP_400_BAD_REQUEST)