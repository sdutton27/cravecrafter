from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password 
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    """Creates a token if valid email & password are provided. 
    Decoding the access token, we will return email."""
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['username'] = user.username
        token['email'] = user.email 
        return token 
    
class RegisterSerializer(serializers.ModelSerializer):
    """Registers a user in the database."""
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])

    class Meta:
        model = User
        fields = ('username', 'email', 'password')
    
    def create(self, validated_data):
        user = User.objects.create(
                        username=validated_data['email'], # email is also username
                        email=validated_data['email'])
        user.set_password(validated_data['password'])
        user.save()

        return user
