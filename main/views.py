from django.shortcuts import render,redirect

def home(request):
    if not request.user.is_authenticated:
        return redirect("login:login")
    return render(request,"home/home.html")

def manage(request):
    if not request.user.is_authenticated:
        return redirect("login:login")
    return render(request, "memberManager/manage.html")

def objectBatch(request):
    if not request.user.is_authenticated:
        return redirect("login:login")
    return render(request, "object/objectBatch.html")

def objectList(request):
    if not request.user.is_authenticated:
        return redirect("login:login")
    return render(request, "object/objectList.html")

def objectRegister(request):
    if not request.user.is_authenticated:
        return redirect("login:login")
    return render(request, "object/objectRegister.html")

def objectView(request):
    if not request.user.is_authenticated:
        return redirect("login:login")
    return render(request, "object/objectView.html")

def objectItemList(request):
    if not request.user.is_authenticated:
        return redirect("login:login")
    return render(request, "objectItem/objectItemList.html")

def linkList(request):
    if not request.user.is_authenticated:
        return redirect("login:login")
    return render(request, "link/linkList.html")

def linkLevelList(request):
    if not request.user.is_authenticated:
        return redirect("login:login")
    return render(request, "linkLevel/linkLevelList.html")

def setupMain(request):
    if not request.user.is_authenticated:
        return redirect("login:login")
    return render(request, "setup/setupMain.html")