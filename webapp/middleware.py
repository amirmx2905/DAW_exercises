from django.shortcuts import redirect
from django.urls import resolve

class AuthRedirectMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
        # URLs que requieren autenticación
        self.protected_urls = ['menu', 'archivo', 'catalogos', 'alumnos', 'procesos', 'reportes']
        # URLs de autenticación
        self.auth_urls = ['login', 'register', 'logout']

    def __call__(self, request):
        # Verificar si la URL actual está en rutas protegidas
        try:
            resolved_path = resolve(request.path_info).url_name
            
            # Si es una URL protegida pero el usuario no está autenticado
            if resolved_path in self.protected_urls and not request.user.is_authenticated:
                return redirect('login')
                
            # Si es una URL de autenticación pero el usuario ya está autenticado
            if resolved_path in self.auth_urls and request.user.is_authenticated and resolved_path != 'logout':
                return redirect('menu')
        except:
            # URL no encontrada, seguir con el flujo normal
            pass
            
        response = self.get_response(request)
        
        # Para todas las respuestas, establecer cabeceras para evitar caché
        if request.path in ['/login/', '/register/', '/logout/'] or not request.user.is_authenticated:
            response['Cache-Control'] = 'no-store, no-cache, must-revalidate, max-age=0'
            response['Pragma'] = 'no-cache'
            response['Expires'] = '-1'
            
        return response