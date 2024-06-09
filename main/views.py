from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from .models import Member
from time import timezone

def home(request):
    if not request.user.is_authenticated:
        return redirect("login:login")
    return render(request,"home/home.html")

def manage(request):
    if not request.user.is_authenticated:
        return redirect("login:login")
    userList = User.objects.all()
    attribute ={}
    attribute['users'] = userList

    return render(request, "memberManager/manage.html", attribute)

def linkList(request):
    if not request.user.is_authenticated:
        return redirect("login:login")
    return render(request, "link/linkList.html")

def linkLevelList(request):
    if not request.user.is_authenticated:
        return redirect("login:login")
    return render(request, "linkLevel/linkLevelList.html")

def objectView(request):
    if not request.user.is_authenticated:
        return redirect("login:login")
    memberList = Member.objects.all()
    attribute = {}
    attribute['members'] = memberList
    return render(request, "object/objectView.html",attribute)

def objectList(request):
    if not request.user.is_authenticated:
        return redirect("login:login")
    memberList = Member.objects.all()
    attribute = {}
    attribute['members'] = memberList
    return render(request, "object/objectList.html",attribute)

def objectRegister(request):
    if not request.user.is_authenticated:
        return redirect("login:login")
    if request.method!='POST':
        return render(request, "object/objectRegister.html")
    newMember = Member()
    newMember.name = request.POST['username']
    newMember.gender = request.POST['gender']
    newMember.department = request.POST['department']
    newMember.studentID = request.POST['studentID']
    if(request.POST['notSchool'] == False):
        newMember.notSchool = False
    else:
        newMember.notSchool = True
    newMember.save()
    print(newMember)

    return render(request, "object/objectRegister.html")

def setupMain(request):
    if not request.user.is_authenticated:
        return redirect("login:login")
    return render(request, "setup/setupMain.html")