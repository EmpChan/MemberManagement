from django.contrib import admin
from django.urls import path,include
from main.views import *

app_name="mainpages"

urlpatterns = [
    path('', home, name = "home"),
    path('manage', manage, name = "manage"),
    path('objectBatch', objectBatch, name = "objectBatch"),
    path('objectList', objectList, name = "objectList"),
    path('objectRegister', objectRegister, name = "objectRegister"),
    path('objectView', objectView, name = "objectView"),
    path('objectItemList', objectItemList, name = "objectItemList"),
    path('linkList', linkList, name = "linkList"),
    path('linkLevelList', linkLevelList, name = "linkLevelList"),
    path('setupMain', setupMain, name = "setupMain"),
]