from django.urls import path
from . import views

urlpatterns = [
    path('', views.menu, name='menu'),
    path('archivo/', views.archivo, name='archivo'),
    path('catalogos/', views.catalogos, name='catalogos'),
    path('procesos/', views.procesos, name='procesos'),
    path('reportes/', views.reportes, name='reportes'),
    path('salir/', views.salir, name='salir'),
]