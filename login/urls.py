from django.contrib import admin
from django.contrib.auth import views as auth_views
from django.urls import path,include
from login.views import *

app_name = "login"

urlpatterns = [
    path('', auth_views.LoginView.as_view(template_name='login/login.html'), name = "login"),
    path('register', register, name = "register"),
]
