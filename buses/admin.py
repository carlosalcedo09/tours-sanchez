
from django.contrib import admin
from unfold.admin import ModelAdmin
from .models import Bus

@admin.register(Bus)
class BusAdmin(ModelAdmin):
    list_display = ('empresa', 'placa', 'numero_pisos', 'total_asientos')
    search_fields = ('placa', 'empresa')
