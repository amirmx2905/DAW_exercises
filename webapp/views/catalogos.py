from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.views.decorators.cache import never_cache

@never_cache
@login_required(login_url='login')
def catalogos(request):
    return render(request, 'modulo.html', {'modulo': 'Catálogos'})