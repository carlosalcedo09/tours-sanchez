from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Usuario

class UsuarioAdmin(UserAdmin):
    model = Usuario
    list_display = ('dni', 'nombres', 'apellidos', 'rol', 'is_active')
    list_filter = ('rol',)
    fieldsets = (
        (None, {'fields': ('dni', 'password')}),
        ('Información personal', {'fields': ('nombres', 'apellidos', 'rol')}),
        ('Permisos', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('dni', 'nombres', 'apellidos', 'rol', 'password1', 'password2', 'is_active', 'is_staff', 'is_superuser')}
        ),
    )
    search_fields = ('dni', 'nombres', 'apellidos')
    ordering = ('dni',)

admin.site.register(Usuario, UsuarioAdmin)
