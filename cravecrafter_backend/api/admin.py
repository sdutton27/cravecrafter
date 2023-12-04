from django.contrib import admin

# Register your models here.
from .models import Restaurant, MenuItem, Menu

class RestaurantAdmin(admin.ModelAdmin):
    list = ('id', 'name', 'img_url')
admin.site.register(Restaurant, RestaurantAdmin)

@admin.register(Menu)
class MenuAdmin(admin.ModelAdmin):
    list = ('id', 'restaurant')

@admin.register(MenuItem)
class MenuItemAdmin(admin.ModelAdmin):
    list = ('id', 'name', 'price_in_cents', 'img_url', 'description', 'favoriters', 'menu.restaurant__name')
# admin.site.register(MenuItem, MenuItemAdmin)

