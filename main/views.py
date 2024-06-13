from django.shortcuts import render,redirect, get_object_or_404
from django.contrib.auth.models import User
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import Member
from time import timezone

def gohome(request):
    return redirect("login:login")

def home(request,root):
    if not request.user.is_authenticated:
        return redirect("login:login")
    groupList = Member.objects.filter(gender="GROUP")
    
    return render(request,"home/home.html",{"groupList":groupList})

def manage(request):
    if not request.user.is_authenticated:
        return redirect("login:login")
    
    query = request.GET.get('query', '')
    if query:
        userList = User.objects.filter(username__icontains=query)
    else:
        userList = User.objects.all()

    paginator = Paginator(userList, 10)  # 페이지당 10개의 아이템을 보여주도록 설정

    page = request.GET.get('page', 1)  # URL의 'page' 파라미터 값을 가져오거나, 없으면 1로 설정
    
    try:
        userList = paginator.page(page)
    except PageNotAnInteger:
        # 페이지 번호가 정수가 아닐 경우, 첫 번째 페이지를 보여줌
        userList = paginator.page(1)
    except EmptyPage:
        # 페이지 범위를 벗어난 경우, 마지막 페이지를 보여줌
        userList = paginator.page(paginator.num_pages)

    attribute = {'users': userList, 'query': query}
    return render(request, "memberManager/manage.html", attribute)

def linkList(request):
    if not request.user.is_authenticated:
        return redirect("login:login")
    groupList = Member.objects.filter(gender="GROUP")
    memberList = Member.objects.exclude(gender__icontains="GROUP")
    if request.method == "POST":
        print(dict(request.POST))
    return render(request, "link/linkList.html",{"memberList":memberList,"groupList":groupList})

def linkLevelList(request):
    if not request.user.is_authenticated:
        return redirect("login:login")
    
    query = request.GET.get('query', '')
    if query:
        groupList = Member.objects.filter(name__icontains=query)
    else:
        groupList = Member.objects.all()
        
    groupList = groupList.filter(gender="GROUP")
    
    if request.method == 'POST':
        try:
            newMember = Member(
                name=request.POST['groupName'],
                gender="GROUP",
                studentID="GROUP",
                department="GROUP",
                type=1
            )
            newMember.save()
        except Exception as e:
            print(e)  # 오류 메시지 출력
            return render(request, "linkLevel/linkLevelList.html", {
                "groupList": groupList,
                "query": query,
                "error_message": "그룹 추가 중 오류가 발생했습니다."
            })
        
    paginator = Paginator(groupList, 10)  # 페이지당 10개의 아이템을 보여주도록 설정

    page = request.GET.get('page', 1)  # URL의 'page' 파라미터 값을 가져오거나, 없으면 1로 설정

    try:
        groupList = paginator.page(page)
    except PageNotAnInteger:
        # 페이지 번호가 정수가 아닐 경우, 첫 번째 페이지를 보여줌
        groupList = paginator.page(1)
    except EmptyPage:
        # 페이지 범위를 벗어난 경우, 마지막 페이지를 보여줌
        groupList = paginator.page(paginator.num_pages)
        
    attribute = {'groupList': groupList, 'query': query}
    return render(request, "linkLevel/linkLevelList.html", attribute)

def objectView(request,id):
    if not request.user.is_authenticated:
        return redirect("login:login")
    objec = get_object_or_404(Member, id=id)
    attribute = {'object':objec}
    if not request.method=="POST":
        return render(request, "object/objectView.html", attribute)
    objec.name= request.POST['username']
    objec.department = request.POST['department']
    objec.studentID = request.POST['studentID']
    objec.gender = request.POST['gender']
    if request.POST['notSchool'] == 'Yes':
        objec.notSchool = True
    else:
        objec.notSchool = False
    objec.save()
    return redirect("mainpages:objectList")


def objectList(request):
    if not request.user.is_authenticated:
        return redirect("login:login")
    
    query = request.GET.get('query', '')
    if query:
        members = Member.objects.filter(name__icontains=query)
    else:
        members = Member.objects.all()
        
    members = members.exclude(gender__icontains="GROUP")
    
    paginator = Paginator(members, 10)  # 페이지당 10개의 아이템을 보여주도록 설정

    page = request.GET.get('page', 1)  # URL의 'page' 파라미터 값을 가져오거나, 없으면 1로 설정

    try:
        members = paginator.page(page)
    except PageNotAnInteger:
        # 페이지 번호가 정수가 아닐 경우, 첫 번째 페이지를 보여줌
        members = paginator.page(1)
    except EmptyPage:
        # 페이지 범위를 벗어난 경우, 마지막 페이지를 보여줌
        members = paginator.page(paginator.num_pages)
        
    attribute = {'members': members, 'query': query}
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

def deleteGroup(request):
    if not request.user.is_authenticated:
        return redirect("login:login")
    if not request.method=="POST":
        return redirect("mainpages:linkLevelList")
    checkBox = request.POST.getlist('selectBox')
    for i in checkBox:
        get_object_or_404(Member,id=int(i)).delete()
    return redirect("mainpages:linkLevelList")

def deleteMember(request):
    if not request.user.is_authenticated:
        return redirect("login:login")
    if not request.method=="POST":
        return redirect("mainpages:objectList")
    checkBox = request.POST.getlist('selectBox')
    for i in checkBox:
        get_object_or_404(Member,id=int(i)).delete()
    return redirect("mainpages:objectList")

def setupMain(request):
    if not request.user.is_authenticated:
        return redirect("login:login")
    userList = User.objects.all()
    userlen = len(userList)
    attributes = {}
    attributes['userList'] = userList
    attributes['userSize'] = userlen

    query = request.GET.get('query', '')
    if query:
        groupList = Member.objects.filter(name__icontains=query)
    else:
        groupList = Member.objects.all()
        
    groupList = groupList.filter(gender="GROUP")

    grouplen = len(groupList)
    attributes['groupList'] = groupList
    attributes['groupSize'] = grouplen

    return render(request, "setup/setupMain.html",attributes)