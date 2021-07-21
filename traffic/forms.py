from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.forms import ModelForm
from .models import Junction

class CreatePersonForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'email','password1', 'password2']

class RoadsForm(ModelForm):
    class Meta:
        model = Junction
        fields = ['state',]