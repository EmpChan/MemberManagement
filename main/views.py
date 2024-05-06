from django.shortcuts import render

def home(request):
    return render(request,"memberManager/setupMain.html")

def manage(request):
    return render(request, "memberManager/manage.html")