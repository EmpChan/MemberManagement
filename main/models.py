from django.db import models

class Member(models.Model):
    name = models.CharField(max_length=20) # name PK
    createrd_at = models.DateField(auto_now_add=True)
    gender = models.CharField(max_length=20)
    parent = models.CharField(max_length=20) # FK 
    department = models.CharField(max_length=50)
    studentID = models.CharField(max_length=50)
    type = models.BooleanField(default=0)# 1이면 그룹임
    notSchool = models.BooleanField(default=0)# 휴학 여부

    def __str__(self):
        s = str(self.name)
        if self.type:
            s=s+'/그룹'
        else:
            s=s+'/사람'
        return s
    