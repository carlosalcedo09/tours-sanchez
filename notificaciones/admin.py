from django.contrib import admin
from .models import Notificacion

@admin.register(Notificacion)
class NotificacionAdmin(admin.ModelAdmin):
    list_display = ('id', 'pasajero', 'mensaje', 'leido', 'fecha_envio')
    list_filter = ('leido',)
    search_fields = ('pasajero__dni', 'mensaje')
