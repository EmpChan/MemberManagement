from django.contrib import admin
from .models import Member

@admin.register(Member)
class MemberAdmin(admin.ModelAdmin):
    list_display = ('name', 'gender', 'parent', 'department', 'studentID', 'type', 'notSchool', 'createrd_at')
    list_filter = ('gender', 'type', 'notSchool', 'createrd_at')
    search_fields = ('name', 'department', 'studentID')
    list_per_page = 20

    def __str__(self):
        return self.name
