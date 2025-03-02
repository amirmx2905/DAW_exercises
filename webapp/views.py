from django.shortcuts import render

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