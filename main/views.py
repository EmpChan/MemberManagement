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