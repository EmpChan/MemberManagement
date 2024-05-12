from django.contrib import admin
from django.urls import path,include



urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main.urls'), name = "mainpages"),
    path('login/', include('login.urls'), name = "login")
]
