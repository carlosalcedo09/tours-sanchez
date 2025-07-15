from django.contrib import admin
from .models import Pasajero

@admin.register(Pasajero)
class PasajeroAdmin(admin.ModelAdmin):
    list_display = ('dni', 'nombres', 'apellidos', 'fecha_nacimiento', 'es_menor', 'acompaniante_dni')
    list_filter = ('es_menor',)
    search_fields = ('dni', 'nombres', 'apellidos', 'correo')
    readonly_fields = ('es_menor',)

    def get_readonly_fields(self, request, obj=None):
        readonly = list(super().get_readonly_fields(request, obj))
        if obj:
            readonly.append('es_menor')
        return readonly
