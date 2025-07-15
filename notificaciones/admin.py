from django.contrib import admin
from .models import Notificacion
from unfold.admin import ModelAdmin

@admin.register(Notificacion)
class NotificacionAdmin(ModelAdmin):
    list_display = ('id', 'pasajero', 'mensaje', 'leido', 'fecha_envio')
    list_filter = ('leido',)
    search_fields = ('pasajero__dni', 'mensaje')
