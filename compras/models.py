from django.db import models
from pasajeros.models import Pasajero
from viajes.models import Viaje
from asientos.models import Asiento

class Compra(models.Model):
    ESTADO_CHOICES = [
        ('pendiente', 'Pendiente'),
        ('aprobado', 'Aprobado'),
        ('rechazado', 'Rechazado'),
    ]

    pasajero = models.ForeignKey(Pasajero, on_delete=models.CASCADE)
    viaje = models.ForeignKey(Viaje, on_delete=models.CASCADE)
    asiento = models.ForeignKey(Asiento, on_delete=models.CASCADE)
    fecha_compra = models.DateField(auto_now_add=True)
    precio = models.DecimalField(max_digits=8, decimal_places=2)
    estado = models.CharField(max_length=10, choices=ESTADO_CHOICES, default='pendiente')

    def __str__(self):
        return f"Compra {self.id} - {self.pasajero.nombres} - {self.estado}"
