from rest_framework import serializers
from .models import Employee

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ('id', 'firstName', 'lastName', 'age', 'salary', 'created_at')
        read_only_fields = ['created_at', 'updated_at']

