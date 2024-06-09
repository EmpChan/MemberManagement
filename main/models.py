from django.db import models

class Member(models.Model):
    name = models.CharField(max_length=20)
    parent = models.CharField(max_length=20)
    createrd_at = models.CharField(max_length=20)
    type = models.BooleanField(default=0)# 1이면 그룹임
     
    def __str__(self):
        return self.name
    