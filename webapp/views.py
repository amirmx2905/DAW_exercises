from django.shortcuts import render
from rest_framework import viewsets
from .models import Alumno
from .serializers import AlumnoSerializer

def menu(request):
    return render(request, 'menu.html')

def archivo(request):
    return render(request, 'modulo.html', {'modulo': 'Archivo'})

def catalogos(request):
    return render(request, 'modulo.html', {'modulo': 'Catálogos'})

def procesos(request):
    return render(request, 'modulo.html', {'modulo': 'Procesos'})

def reportes(request):
    return render(request, 'modulo.html', {'modulo': 'Reportes'})

def salir(request):
    return render(request, 'modulo.html', {'modulo': 'Salir'})

class AlumnoViewSet(viewsets.ModelViewSet):
    queryset = Alumno.objects.all()
    serializer_class = AlumnoSerializer