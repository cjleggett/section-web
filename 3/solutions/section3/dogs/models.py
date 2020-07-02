from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.

class User(AbstractUser):
    age = models.IntegerField(default=0)
    name = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.name}: {self.age} yrs"

class Dog(models.Model):
    name = models.CharField(max_length=50)
    age = models.IntegerField(default=0)
    home = models.ForeignKey("City", on_delete=models.SET_NULL, null=True, related_name="residents")
    people = models.ManyToManyField("User", related_name="dogs")

    def __str__(self):
        return f"{self.name}: {self.age} yrs"

class City(models.Model):
    name = models.CharField(max_length=50)
    zip_code = models.CharField(max_length=5)

    def __str__(self):
        return f"{self.name} ({self.zip_code})"

