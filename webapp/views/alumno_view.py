from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from ..models import Alumno
from django.views.decorators.http import require_POST

def alumno_view(request):
    alumnos = Alumno.objects.all()
    return render(request, 'alumnos.html', {'modulo': 'Alumnos', 'alumnos': alumnos})

@require_POST
def guardar_alumno(request):
    alumno_id = request.POST.get('alumno_id')
    
    try:
        # Si alumno_id tiene valor, estamos editando un alumno existente
        if alumno_id:
            alumno = get_object_or_404(Alumno, id=alumno_id)
            mensaje = "Alumno actualizado correctamente."
        else:
            # Si no, estamos creando uno nuevo
            alumno = Alumno()
            mensaje = "Alumno agregado correctamente."
        
        # Actualizar los datos del alumno
        alumno.nombre = request.POST.get('nombre')
        alumno.apellido = request.POST.get('apellido')
        alumno.matricula = request.POST.get('matricula')
        alumno.email = request.POST.get('email')
        alumno.carrera = request.POST.get('carrera')
        alumno.semestre = int(request.POST.get('semestre'))
        
        alumno.save()
        messages.success(request, mensaje)
    except Exception as e:
        messages.error(request, f"Error al guardar alumno: {str(e)}")
    
    return redirect('alumnos')

@require_POST
def eliminar_alumno(request):
    alumno_id = request.POST.get('alumno_id')
    
    try:
        alumno = get_object_or_404(Alumno, id=alumno_id)
        alumno.delete()
        messages.success(request, "Alumno eliminado correctamente.")
    except Exception as e:
        messages.error(request, f"Error al eliminar alumno: {str(e)}")
    
    return redirect('alumnos')