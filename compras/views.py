from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Compra
from .serializers import CompraSerializer

class CompraViewSet(viewsets.ModelViewSet):
    queryset = Compra.objects.all()
    serializer_class = CompraSerializer

    def create(self, request, *args, **kwargs):
        pasajero_id = request.data.get('pasajero')
        asiento_id = request.data.get('asiento')
        viaje_id = request.data.get('viaje')

        # Importar modelo Pasajero
        from pasajeros.models import Pasajero
        try:
            pasajero = Pasajero.objects.get(id=pasajero_id)
        except Pasajero.DoesNotExist:
            return Response({'error': 'Pasajero no encontrado.'}, status=status.HTTP_400_BAD_REQUEST)

        # Verificar si ya compró un pasaje para el mismo viaje
        if Compra.objects.filter(pasajero_id=pasajero_id, viaje_id=viaje_id).exists():
            return Response({
                'error': 'Este pasajero ya tiene un pasaje para este viaje.'
            }, status=status.HTTP_400_BAD_REQUEST)

        # Verificar si el asiento ya fue comprado en ese viaje
        if Compra.objects.filter(asiento_id=asiento_id, viaje_id=viaje_id).exists():
            return Response({
                'error': 'Este asiento ya fue comprado para este viaje.'
            }, status=status.HTTP_400_BAD_REQUEST)

        # Validación menor de edad
        edad = pasajero.calcular_edad()
        if edad < 18:
            if not pasajero.permiso_notarial and not pasajero.acompaniante_dni:
                return Response({
                    'error': 'Pasajero menor debe tener permiso notarial o acompañante registrado.'
                }, status=status.HTTP_400_BAD_REQUEST)

        return super().create(request, *args, **kwargs)
