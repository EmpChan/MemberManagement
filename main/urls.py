from django.contrib import admin
from django.urls import path,include
from main.views import *

urlpatterns = [
    path('', home, name = "home"),
    path('manage', manage, name= 'manage')
]   