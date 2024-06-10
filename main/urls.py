from django.contrib import admin
from django.urls import path,include
from main.views import *

app_name="mainpages"

urlpatterns = [
    path('', home, name = "home"),
    path('manage', manage, name = "manage"),
    path('linkList', linkList, name = "linkList"),
    path('linkLevelList', linkLevelList, name = "linkLevelList"),
    path('setupMain', setupMain, name = "setupMain"),
    path('objectList', objectList, name="objectList"),
    path('objectView/<int:id>', objectView, name="objectView"),
    path('objectRegister', objectRegister, name="objectRegister"),
    path('deleteGroup',deleteGroup , name = "deleteGroup"),
    path('deleteMember', deleteMember, name="deleteMember"),
]