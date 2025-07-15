from django.db import models
from pasajeros.models import Pasajero

class Notificacion(models.Model):
    pasajero = models.ForeignKey(Pasajero, on_delete=models.CASCADE)
    mensaje = models.TextField()
    leido = models.BooleanField(default=False)
    fecha_envio = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Notificación para {self.pasajero} - {'Leída' if self.leido else 'No leída'}"
