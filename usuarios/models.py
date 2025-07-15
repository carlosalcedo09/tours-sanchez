from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models

# Gestor personalizado de usuarios
class UsuarioManager(BaseUserManager):
    def create_user(self, dni, nombres, apellidos, rol, password=None):
        if not dni:
            raise ValueError('El usuario debe tener un DNI')
        usuario = self.model(
            dni=dni,
            nombres=nombres,
            apellidos=apellidos,
            rol=rol
        )
        usuario.set_password(password)
        usuario.save(using=self._db)
        return usuario

    def create_superuser(self, dni, nombres, apellidos, rol='superadmin', password=None):
        usuario = self.create_user(dni, nombres, apellidos, rol, password)
        usuario.is_superuser = True
        usuario.is_staff = True
        usuario.save(using=self._db)
        return usuario

# Modelo de usuario personalizado
class Usuario(AbstractBaseUser, PermissionsMixin):
    ROLES = (
        ('superadmin', 'Superadministrador'),
        ('agenciero', 'Agenciero'),
        ('ti', 'Soporte TI'),
    )

    dni = models.CharField(max_length=8, unique=True)
    nombres = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    rol = models.CharField(max_length=20, choices=ROLES)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UsuarioManager()

    USERNAME_FIELD = 'dni'
    REQUIRED_FIELDS = ['nombres', 'apellidos', 'rol']

    def __str__(self):
        return f"{self.nombres} {self.apellidos} - {self.rol}"
