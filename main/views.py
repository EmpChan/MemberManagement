from django.shortcuts import render

def home(request):
    return render(request,"memberManager/setupMain.html")

def manage(request):
    return render(request, "memberManager/manage.html")

def objectBatch(request):
    return render(request, "object/objectBatch.html")

def objectList(request):
    return render(request, "object/objectList.html")

def objectRegister(request):
    return render(request, "object/objectRegister.html")

def objectView(request):
    return render(request, "object/objectView.html")

def objectItemList(request):
    return render(request, "objectItem/objectItemList.html")

def login(request):
    return render(request, "login/login.html")

def register(request):
    return render(request, "login/register.html")

def linkList(request):
    return render(request, "link/linkList.html")

def linkLevelList(request):
    return render(request, "link/linkLevelList.html")

