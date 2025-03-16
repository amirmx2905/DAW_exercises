from django.shortcuts import redirect
from django.urls import resolve

class AuthRedirectMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        resolved_path = resolve(request.path_info).url_name
        if resolved_path in {'menu', 'archivo', 'catalogos', 'alumnos', 'procesos', 'reportes'}:
            if not request.user.is_authenticated:
                return redirect('login')
        elif resolved_path in {'login', 'register'} and request.user.is_authenticated:
            return redirect('menu')
        return self.get_response(request)