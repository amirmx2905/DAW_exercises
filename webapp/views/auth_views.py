from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from django.views.decorators.cache import never_cache
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse


@never_cache
def login_view(request):
    # Redirige a los usuarios ya autenticados al menú principal
    if request.user.is_authenticated:
        return redirect('menu')
        
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            login(request, user)
            # Obtener la URL next de GET o POST
            next_url = request.POST.get('next') or request.GET.get('next') or 'menu'
            return redirect(next_url)
        else:
            messages.error(request, "Usuario o contraseña incorrectos.")
    
    # Asegurarse de que la página siempre se carga fresca, no desde la caché
    response = render(request, 'login.html')
    response['Cache-Control'] = 'no-store, no-cache, must-revalidate, max-age=0'
    response['Pragma'] = 'no-cache'
    response['Expires'] = '-1'
    return response

@never_cache
def register_view(request):
    if request.user.is_authenticated:
        return redirect('menu')
        
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        password1 = request.POST.get('password1')
        password2 = request.POST.get('password2')
        
        if User.objects.filter(username=username).exists():
            messages.error(request, "El nombre de usuario ya está en uso.")
            return render(request, 'register.html')
        
        if User.objects.filter(email=email).exists():
            messages.error(request, "El email ya está registrado.")
            return render(request, 'register.html')
            
        if password1 != password2:
            messages.error(request, "Las contraseñas no coinciden.")
            return render(request, 'register.html')
            
        try:
            validate_password(password1)
        except ValidationError as e:
            messages.error(request, f"Error de contraseña: {', '.join(e.messages)}")
            return render(request, 'register.html')
            
        user = User.objects.create_user(
            username=username,
            email=email,
            first_name=first_name,
            last_name=last_name,
            password=password1
        )
        
        login(request, user)
        messages.success(request, "¡Registro exitoso!")
        return redirect('menu')
    
    # Asegurarse de que la página siempre se carga fresca
    response = render(request, 'register.html')
    response['Cache-Control'] = 'no-store, no-cache, must-revalidate, max-age=0'
    response['Pragma'] = 'no-cache'
    response['Expires'] = '-1'
    return response

@require_http_methods(["GET", "POST"])
@never_cache
def logout_view(request):
    if request.user.is_authenticated:
        # Invalidar sesión del lado del servidor
        request.session.flush()
        logout(request)
        messages.success(request, "Sesión cerrada correctamente.")
        
    # Redirigir a login con cabeceras para evitar caché
    response = redirect('login')
    response['Cache-Control'] = 'no-store, no-cache, must-revalidate, max-age=0'
    response['Pragma'] = 'no-cache'
    response['Expires'] = '-1'
    # Agregar una cookie segura para invalidar la sesión en el navegador
    response.set_cookie('is_logged_in', '', expires=0, samesite='Strict')
    return response

@never_cache
def check_auth(request):
    """Endpoint para verificar si el usuario está autenticado"""
    return JsonResponse({
        'authenticated': request.user.is_authenticated,
    })