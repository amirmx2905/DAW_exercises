from django.shortcuts import render

def procesos(request):
    return render(request, 'modulo.html', {'modulo': 'Procesos'})