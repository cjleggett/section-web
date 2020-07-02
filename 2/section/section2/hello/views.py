from django.shortcuts import render

# Create your views here.

def index(request):
    context = {
        "name": "Connor"
    }
    return render(request, "hello/index.html", context)