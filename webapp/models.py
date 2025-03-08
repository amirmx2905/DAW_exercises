from django.db import models

class Alumno(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    matricula = models.CharField(max_length=20, unique=True)
    email = models.EmailField()
    carrera = models.CharField(max_length=100)
    semestre = models.IntegerField()
    
    def __str__(self):
        return f"{self.nombre} {self.apellido} ({self.matricula})"
    
    class Meta:
        managed = False  # Since we created the table manually
        db_table = 'database"."alumnos'  # Use this format for specifying schema
        app_label = 'webapp'