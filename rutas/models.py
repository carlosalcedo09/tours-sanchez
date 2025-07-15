from django.db import models

class Ruta(models.Model):
    origen = models.CharField(max_length=100)
    destino = models.CharField(max_length=100)
    duracion_aproximada = models.DurationField()
    precio_base = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.origen} → {self.destino}"
