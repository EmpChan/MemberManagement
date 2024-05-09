from django.contrib import admin
from django.urls import path,include
from main.views import *

urlpatterns = [
    path('', home, name = "home"),
    path('manage', manage, name = "manage"),
    path('objectBatch', objectBatch, name = "objectBatch"),
    path('objectList', objectList, name = "objectList"),
    path('objectRegister', objectRegister, name = "objectRegister"),
    path('objectView', objectView, name = "objectView"),
    path('objectItemList', objectItemList, name = "objectItemList"),
    path('login', login, name = "login"),
    path('login/register', register, name = "register"),
    path('linkList', linkList, name = "linkList"),
    path('linkLevelList', linkLevelList, name = "linkLevelList"),
    path('setupMain', setupMain, name = "setupMain"),

]   