from django.shortcuts import render
from .serializers import RestaurantSerializer
from rest_framework import viewsets 
from .models import Restaurant 

# Create your views here.
class RestaurantView(viewsets.ModelViewSet):
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()


