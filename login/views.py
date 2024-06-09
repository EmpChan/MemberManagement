from django.shortcuts import render,redirect
from .forms import *
from main.models import Member
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import AuthenticationForm

def register(request):
    if request.method == "POST":
        form = UserForm(request.POST)
        if form.is_valid():
            newMember = Member()
            newMember.name = request.POST['username']
            newMember.gender = request.POST['gender']
            newMember.department = request.POST['department']
            newMember.studentID = request.POST['studentid']
            newMember.save()
            form.save()
            print(newMember)
            return redirect("login:login")
        else:
            print(form)
    return render(request, "login/register.html")
