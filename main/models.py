from django.db import models

class Member(models.Model):
    name = models.CharField(max_length=20)
    createrd_at = models.DateField(auto_now_add=True)
    gender = models.CharField(max_length=20)
    parent = models.CharField(max_length=20)
    department = models.CharField(max_length=50)
    studentID = models.CharField(max_length=50)
    type = models.BooleanField(default=0)# 1이면 그룹임
    notSchool = models.BooleanField(default=0)# 휴학 여부

    def __str__(self):
        return self.name
    