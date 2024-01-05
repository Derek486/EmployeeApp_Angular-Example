from django.db import models

# Create your models here.
class Employee(models.Model):
    firstName = models.CharField(max_length=25, null=False)
    lastName = models.CharField(max_length=25, null=False)
    age = models.IntegerField(null=False)
    salary = models.DecimalField(decimal_places=2, max_digits=6, null=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_AT = models.DateTimeField(auto_now=True)
