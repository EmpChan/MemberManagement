from django.shortcuts import render
from .forms import *

def register(request):
    if request.method == "POST":
        form = UserForm(request.POST)
        if form.is_valid():
            form.save()
            return render(request, '')
        else:
            print(form)
    return render(request, "login/register.html")
