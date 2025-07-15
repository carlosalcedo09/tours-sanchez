from rest_framework import serializers
from .models import Compra

class CompraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Compra
        fields = '__all__'

    def validate(self, data):
        pasajero = data.get('pasajero')
        viaje = data.get('viaje')
        asiento = data.get('asiento')

        # Validación 1: El pasajero ya compró un pasaje para este viaje
        if Compra.objects.filter(pasajero=pasajero, viaje=viaje).exists():
            raise serializers.ValidationError({"error": "Este pasajero ya tiene un pasaje para este viaje."})

        # ✅ Validación 2: El asiento ya está comprado en este viaje
        if Compra.objects.filter(asiento=asiento, viaje=viaje).exists():
            raise serializers.ValidationError({"error": "Este asiento ya ha sido vendido para este viaje."})

        return data
    
    class CompraRevisionSerializer(serializers.ModelSerializer):
        class Meta:
            model = Compra
            fields = ['estado', 'comentario_admin'] 
