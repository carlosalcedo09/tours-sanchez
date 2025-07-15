from django.contrib import admin
from .models import Bus

@admin.register(Bus)
class BusAdmin(admin.ModelAdmin):
    list_display = ('empresa', 'placa', 'numero_pisos', 'total_asientos')
    search_fields = ('placa', 'empresa')
