from django.shortcuts import render

def reportes(request):
    return render(request, 'modulo.html', {'modulo': 'Reportes'})