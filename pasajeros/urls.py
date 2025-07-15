from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PasajeroViewSet

router = DefaultRouter()
router.register(r'pasajeros', PasajeroViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
