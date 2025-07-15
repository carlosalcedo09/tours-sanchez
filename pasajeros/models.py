from django.db import models
from datetime import date

class Pasajero(models.Model):
    dni = models.CharField(max_length=8, unique=True)
    nombres = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    fecha_nacimiento = models.DateField()
    telefono = models.CharField(max_length=15, blank=True, null=True)
    correo = models.EmailField(blank=True, null=True)

    permiso_notarial = models.ImageField(upload_to='permisos/', blank=True, null=True)
    es_menor = models.BooleanField(default=False, editable=False)
    acompaniante_dni = models.CharField(max_length=8, blank=True, null=True)

    def calcular_edad(self):
        hoy = date.today()
        return hoy.year - self.fecha_nacimiento.year - (
            (hoy.month, hoy.day) < (self.fecha_nacimiento.month, self.fecha_nacimiento.day)
        )

    def save(self, *args, **kwargs):
        edad = self.calcular_edad()
        self.es_menor = edad < 18
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.nombres} {self.apellidos} ({self.dni})"
