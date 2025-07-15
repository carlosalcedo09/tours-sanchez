from django.shortcuts import render

from rest_framework import viewsets
from .models import Asiento
from .serializers import AsientoSerializer

class AsientoViewSet(viewsets.ModelViewSet):
    queryset = Asiento.objects.all()
    serializer_class = AsientoSerializer
