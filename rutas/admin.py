from django.contrib import admin
from .models import Ruta

from unfold.admin import ModelAdmin

@admin.register(Ruta)
class RutaAdmin(ModelAdmin):
    list_display = ('origen', 'destino', 'duracion_aproximada', 'precio_base')
    search_fields = ('origen', 'origen')