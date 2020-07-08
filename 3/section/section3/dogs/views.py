from django.shortcuts import render
from django.urls import reverse
from django.http import HttpResponseRedirect
from .models import Dog, City, User
from .forms import DogForm, CityForm

# Create your views here.

def index(request):
    dogs = Dog.objects.all()
    return render(request, "dogs/index.html", {
        "dogs": dogs
    })

def newdog(request):
    form = DogForm()

    if request.method == "POST":
        doggo = DogForm(request.POST)
        if doggo.is_valid():
            doggo.save()
            return HttpResponseRedirect(reverse("index"))
    return render(request, "dogs/newdog.html", {
        "form": form
    })