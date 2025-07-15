from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AsientoViewSet

router = DefaultRouter()
router.register(r'asientos', AsientoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
