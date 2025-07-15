from rest_framework import serializers
from .models import Viaje

class ViajeSerializer(serializers.ModelSerializer):
    descripcion = serializers.SerializerMethodField()
    ruta = serializers.StringRelatedField()
    bus = serializers.StringRelatedField()

    class Meta:
        model = Viaje
        fields = '__all__'

    def get_descripcion(self, obj):
        return f"{obj.ruta.origen} → {obj.ruta.destino} | {obj.fecha_salida.strftime('%d/%m/%Y')} {obj.hora_salida.strftime('%H:%M')} | Bus: {obj.bus.placa}"
