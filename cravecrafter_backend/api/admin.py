from django.contrib import admin

# Register your models here.
from .models import Restaurant

# admin.site.register(Restaurant)

class RestaurantAdmin(admin.ModelAdmin):
    list = ('id', 'name', 'img_url')

admin.site.register(Restaurant, RestaurantAdmin)

