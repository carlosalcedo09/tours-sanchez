# asientos/models.py

from django.db import models
from buses.models import Bus

class Asiento(models.Model):
    NUMERO_CHOICES = [(i, f"{i:02}") for i in range(1, 61)]  # Asientos del 01 al 60
    GRADO_INCLINACION_CHOICES = [
        (140, 'Económico (140°)'),
        (160, 'Confort (160°)'),
        (180, 'Exclusivo (180°)'),
    ]

    bus = models.ForeignKey(Bus, on_delete=models.CASCADE, related_name='asientos')
    numero = models.IntegerField(choices=NUMERO_CHOICES)
    grado_inclinacion = models.IntegerField(choices=GRADO_INCLINACION_CHOICES)
    piso = models.IntegerField(choices=[(1, 'Primer piso'), (2, 'Segundo piso')])

    class Meta:
        unique_together = ('bus', 'numero')
        ordering = ['bus', 'piso', 'numero']

    def __str__(self):
        return f"Asiento {self.numero} - Bus {self.bus.placa}"
