from django.shortcuts import render

def archivo(request):
    return render(request, 'modulo.html', {'modulo': 'Archivo'})