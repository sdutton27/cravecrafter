from django.db import models

import uuid 

from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

class UserManager(BaseUserManager):

    def create_user(self, email, password, **kwargs):
        """Create and return a `User` with an email, and password."""
        if email is None:
            raise TypeError('Users must have an email.')
        if password is None:
            raise TypeError('Users must have a password.')

        user = self.model(email=self.normalize_email(email))
        user.set_password(password)
        user.save(using=self._db)

        return user

class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(db_index=True, unique=True,  null=True, blank=True)
    is_active = models.BooleanField(default=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['email, password']

    objects = UserManager()

    def __str__(self):
        return f"{self.email}" 

# Restaurant
class Restaurant(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, 
                          help_text="The unique identifer for this restaurant.")
    name = models.CharField(max_length=200)
    img_url = models.URLField()
    # menu = models.ForeignKey('Menu', on_delete=models.RESTRICT, null=True)

    def __str__(self):
        """String for representing the Model object."""
        return f'{self.name} ({self.id})'

    def get_absolute_url(self):
        return reverse('restaurant-detail', args=[str(self.id)])
    
