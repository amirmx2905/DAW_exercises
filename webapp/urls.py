from django.urls import path
from .views import menu, archivo, catalogos, procesos, reportes, salir, alumno_view, guardar_alumno, eliminar_alumno
from .views.auth_views import login_view, register_view, logout_view, check_auth
from django.views.decorators.csrf import csrf_exempt

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
    
    # URLs de autenticación
    path('login/', login_view, name='login'),
    path('register/', register_view, name='register'),
    path('logout/', logout_view, name='logout'),
    path('check-auth/', check_auth, name='check_auth'),
]