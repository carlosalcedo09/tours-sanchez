from django.contrib import admin
from .models import Compra

@admin.register(Compra)
class CompraAdmin(admin.ModelAdmin):
    list_display = ('id', 'pasajero', 'viaje', 'asiento', 'fecha_compra', 'precio', 'estado')
    list_filter = ('estado',)
    search_fields = ('pasajero__dni', 'viaje__ruta__origen', 'viaje__ruta__destino')
