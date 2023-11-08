from django.db import models

# User class
class User(models.Model):
    first_name = models.CharField("First Name", max_length=20)
    last_name = models.CharField("Last Name", max_length=30)
    email = models.EmailField()
    birthdate = models.DateField()
    #apitoken
    #grubhub_id
    #phone = models.PhoneNumberField(_(""))
    shipping_address = models.CharField("Shipping Address", max_length=100)
    shipping_city = models.CharField("City", max_length=30)
    shipping_state = models.CharField("State", max_length=15)
    shipping_zipcode = models.IntegerField()
    
    def __str__(self):
        return self.first_name + " " + self.last_name