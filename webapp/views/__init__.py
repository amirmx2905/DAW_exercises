from .menu import menu
from .archivo import archivo
from .catalogos import catalogos
from .procesos import procesos
from .reportes import reportes
from .salir import salir
from .alumnos import AlumnoViewSet
from .alumno_view import alumno_view, guardar_alumno, eliminar_alumno
from .auth_views import login_view, register_view, logout_view

__all__ = [
    'menu',
    'archivo',
    'catalogos',
    'procesos',
    'reportes',
    'salir',
    'AlumnoViewSet',
    'alumno_view',
    'guardar_alumno',
    'eliminar_alumno',
    'login_view',
    'register_view',
    'logout_view',
]