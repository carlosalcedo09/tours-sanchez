from django.db import models

class Bus(models.Model):
    empresa = models.CharField(max_length=100)
    placa = models.CharField(max_length=10, unique=True)
    numero_pisos = models.PositiveSmallIntegerField(default=1)
    total_asientos = models.PositiveIntegerField()
    
    def __str__(self):
        return self.placa
