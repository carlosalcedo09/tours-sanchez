# asientos/admin.py

from django.contrib import admin
from .models import Asiento
from unfold.admin import ModelAdmin

@admin.register(Asiento)
class AsientoAdmin(ModelAdmin):
    list_display = ('bus', 'numero', 'piso', 'grado_inclinacion')
    list_filter = ('bus', 'piso', 'grado_inclinacion')
