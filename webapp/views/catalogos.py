from django.shortcuts import render

def catalogos(request):
    return render(request, 'modulo.html', {'modulo': 'Catálogos'})