from .models import Dog, City
from django.forms import ModelForm


class CityForm(ModelForm):
    class Meta:
        model = City
        fields = ["name", "zip_code"]

class DogForm(ModelForm):
    class Meta:
        model = Dog
        fields = ["name", "age", "home", "people"]