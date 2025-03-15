from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User

# Personalizar la visualización de usuarios
class CustomUserAdmin(UserAdmin):
    list_display = ('username', 'email', 'first_name', 'last_name', 'is_active', 'date_joined', 'last_login')
    list_filter = ('is_active', 'is_staff', 'date_joined')
    search_fields = ('username', 'email', 'first_name', 'last_name')
    ordering = ('-date_joined',)  # Ordenar por fecha de registro (más recientes primero)

# Reemplazar el UserAdmin predeterminado con tu versión personalizada
admin.site.unregister(User)
admin.site.register(User, CustomUserAdmin)