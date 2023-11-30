"""
URL configuration for cravecrafter_backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework import routers 
from api import views 

router = routers.DefaultRouter()
# default router for restaurant => we will add change this URL later to match the GrubHub API endpoint
router.register(r'restaurants', views.RestaurantView, 'restaurant')
# router.register(r'users^$', views.UserCreate, 'account-create')

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('api/', include('api.urls'))
    path('api/', include(router.urls))
]

#Add URL maps to redirect the base URL to our application
from django.views.generic import RedirectView
urlpatterns += [
    path('', RedirectView.as_view(url='api/', permanent=True)),
    # re_path(r'^users/', include('api.urls')),
]
