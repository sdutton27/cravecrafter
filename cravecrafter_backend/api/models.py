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
    favoriters = models.ManyToManyField(get_user_model(), related_name="favorite_restaurant", blank=True)

    def __str__(self):
        """String for representing the Model object."""
        return f'{self.name} ({self.id})'

    def get_absolute_url(self):
        return reverse('restaurant-detail', args=[str(self.id)])
    
