from django.shortcuts import render

def index(request):
    return render(request, 'frontend/index.html')

def admin(request):
    return render(request, 'frontend/Admin.html')

def asientos(request):
    return render(request, 'frontend/Asientos.html')

def disponibilidad(request):
    return render(request, 'frontend/disponibilidad.html')
# Agrega más vistas según sea necesario
