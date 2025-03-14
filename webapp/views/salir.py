from django.shortcuts import render

def salir(request):
    return render(request, 'modulo.html', {'modulo': 'Salir'})