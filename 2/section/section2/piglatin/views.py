from django.shortcuts import render

from . import util
from . import forms
# Create your views here.

def index(request):
    translation = None
    if request.method == "POST":
        form = forms.TextForm(request.POST)
        if form.is_valid():
            text = form.cleaned_data["plain"]
            translation = util.piglatinify(text)
    form = forms.TextForm()
    return render(request, "piglatin/index.html", {
        "form": form,
        "translation": translation
    })