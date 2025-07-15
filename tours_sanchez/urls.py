from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('usuarios.urls')),
    path('api/', include('buses.urls')),
    path('api/', include('asientos.urls')),
    path('api/', include('rutas.urls')),
    path('api/', include('viajes.urls')),
    path('api/', include('compras.urls')),
    path('api/notificaciones/', include('notificaciones.urls')),
    path('', include('frontend.urls')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),


]