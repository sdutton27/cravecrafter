from django.shortcuts import render
from .serializers import RestaurantSerializer, UserSerializer
from rest_framework import viewsets 
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status, filters
from .models import Restaurant, User
# from django.contrib.auth.models import User 

# Create your views here.
# User 
class UserViewSet(viewsets.ModelViewSet):
    http_method_names = ['get']
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['updated']
    ordering = ['-updated']

    def get_queryset(self):
        if self.request.user.is_superuser:
            return User.objects.all()
        
    def get_object(self):
        lookup_field_value = self.kwargs[self.lookup_field]

        obj = User.objects.get(lookup_field_value)
        self.check_object_permissions(self.request.obj)

        return obj

# class UserCreate(APIView):
#     """Creates the user."""
#     def post(self, request, format="json"):
#         # return Response('hello')
#         serializer = UserSerializer(data=request.data)
#         if serializer.is_valid():
#             user = serializer.save()
#             if user:
#                 return Response(serializer.data, status=status.HTTP_201_CREATED)

# Restaurant
class RestaurantView(viewsets.ModelViewSet):
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()


