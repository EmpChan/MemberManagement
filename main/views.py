from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
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
    paginator = Paginator(memberList, 10)  # 페이지당 10개의 아이템을 보여주도록 설정

    page = request.GET.get('page', 1)  # URL의 'page' 파라미터 값을 가져오거나, 없으면 1로 설정

    try:
        members = paginator.page(page)
    except PageNotAnInteger:
        # 페이지 번호가 정수가 아닐 경우, 첫 번째 페이지를 보여줌
        members = paginator.page(1)
    except EmptyPage:
        # 페이지 범위를 벗어난 경우, 마지막 페이지를 보여줌
        members = paginator.page(paginator.num_pages)

    attribute = {'members': members}
    return render(request, "object/objectList.html", attribute)

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

def PaginationObjectList(request):
    pagination_list = Member.objects.all()
    paginator = Paginator(pagination_list, 10)
    
    page = request.GET.get('page')
    try:
        pagination_list = paginator.page(page)
    except PageNotAnInteger:
        # 페이지가 정수가 아닌 경우 첫 페이지를 반환한다.
        pagination_list = paginator.page(1)
    except EmptyPage:
        # 페이지가 범위를 벗어나면 마지막 페이지를 반환한다.
        pagination_list = paginator.page(paginator.num_pages)
        
    return render(request, "object/objectList.html", {'pagination_list': pagination_list})