from django.contrib import admin
from django.urls import path,include
from main.views import *

urlpatterns = [
    path('', test, name = "home"),
]