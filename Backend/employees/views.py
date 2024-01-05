from rest_framework import viewsets, permissions
from .models import Employee
from .serializers import EmployeeSerializer

# Create your views here.
class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all() # Consulta guardad en un set
    permission_classes = [permissions.AllowAny] # Permisos para los objetos del modelo
    serializer_class = EmployeeSerializer
