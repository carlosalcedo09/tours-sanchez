from django.db import models
from rutas.models import Ruta
from buses.models import Bus

class Viaje(models.Model):
    ruta = models.ForeignKey(Ruta, on_delete=models.CASCADE)
    bus = models.ForeignKey(Bus, on_delete=models.CASCADE)
    fecha_salida = models.DateField()
    hora_salida = models.TimeField()
    
    ESTADOS_CHOICES = [
        ('programado', 'Programado'),
        ('en_curso', 'En curso'),
        ('finalizado', 'Finalizado'),
        ('cancelado', 'Cancelado'),
    ]
    estado = models.CharField(max_length=20, choices=ESTADOS_CHOICES, default='programado')

    def __str__(self):
        return f"{self.ruta.origen} → {self.ruta.destino} | {self.fecha_salida.strftime('%d/%m/%Y')} {self.hora_salida.strftime('%H:%M')} | Bus: {self.bus.placa}"
