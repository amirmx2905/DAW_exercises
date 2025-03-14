from django.urls import path
from .views import menu, archivo, catalogos, procesos, reportes, salir, alumno_view, guardar_alumno, eliminar_alumno

urlpatterns = [
    path('', menu, name='menu'),
    path('archivo/', archivo, name='archivo'),
    path('catalogos/', catalogos, name='catalogos'),
    path('procesos/', procesos, name='procesos'),
    path('reportes/', reportes, name='reportes'),
    path('salir/', salir, name='salir'),
    path('alumnos/', alumno_view, name='alumnos'),
    path('alumnos/guardar/', guardar_alumno, name='guardar_alumno'),
    path('alumnos/eliminar/', eliminar_alumno, name='eliminar_alumno'),
]