from django.db import models
from django.contrib.auth import get_user_model
import uuid 

# Restaurant
class Restaurant(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, 
                          help_text="The unique identifer for this restaurant.")
    name = models.CharField(max_length=200)
    img_url = models.URLField()
    # menu = models.ForeignKey('Menu', on_delete=models.RESTRICT, null=True)

    menu_items = models.ManyToManyField('MenuItem', related_name="restaurant_with_menu", blank=True)
    favoriters = models.ManyToManyField(get_user_model(), related_name="favorite_restaurants", blank=True)

    def __str__(self):
        """String for representing the Model object."""
        return f'{self.name} ({self.id})'

    def get_absolute_url(self):
        return reverse('restaurant-detail', args=[str(self.id)])
    
class MenuItem(models.Model):
    name = models.CharField(max_length=200)
    price_in_cents = models.IntegerField()
    img_url = models.URLField()
    description = models.CharField(max_length=200)
    favoriters = models.ManyToManyField(get_user_model(), related_name="favorite_menu_items", blank=True)

    def __str__(self):
        """String for representing the Model object."""
        return f'{self.name} ({self.id})'

    def get_absolute_url(self):
        return reverse('menu-item-detail', args=[str(self.id)])