from django.contrib import admin

# Register your models here.
from .models import Restaurant, MenuItem

class RestaurantAdmin(admin.ModelAdmin):
    list = ('id', 'name', 'img_url')
admin.site.register(Restaurant, RestaurantAdmin)


class MenuItemAdmin(admin.ModelAdmin):
    list = ('id', 'name', 'price_in_cents', 'img_url', 'description', 'favoriters', 'restaurant_with_menu')
admin.site.register(MenuItem, MenuItemAdmin)

