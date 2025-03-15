# Investigadores App

Investigadores App es una aplicación web desarrollada en Django que permite la gestión de alumnos, catálogos, procesos y reportes. Este proyecto incluye autenticación de usuarios, un sistema de gestión de alumnos y una interfaz moderna.

## Características

- Autenticación de usuarios (registro, inicio de sesión, cierre de sesión).
- Gestión de alumnos (crear, editar, eliminar).
- Módulos para catálogos, procesos y reportes.
- Interfaz moderna y responsiva.

## Requisitos

Antes de comenzar, asegúrate de tener instalados los siguientes requisitos:

- Python 3.10 o superior
- PostgreSQL
- Virtualenv (opcional, pero recomendado)

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local:

### 1. Clonar el repositorio

```bash
git clone https://github.com/amirmx2905/djangoWebApp.git
cd djangoWebApp
```

### 2. Crear y activar el entorno virtual

```bash
python -m venv env
source env/bin/activate  # En Windows: env\Scripts\activate 
```

### 3. Instalar dependencias

```bash
pip install -r requirements.txt
```

### 4. Configurar base de datos

- Asegúrate de tener PostgreSQL instalado y ejecutándose.
- Crea una base de datos y un usuario con los permisos necesarios.
- Actualiza las credenciales de la base de datos en el archivo backend/settings.py:

```bash
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'nombrebasedatos',
        'USER': 'usuario',
        'PASSWORD': 'contraseña',
        'HOST': 'localhost',
        'PORT': '5432',
        'OPTIONS': {
            'options': '-c search_path=database'
        }
    }
}
```

### 5. Aplicar Migraciones

```bash
python manage.py makemigrations
python manage.py migrate
```

### 6. Ejecutar servidor de desarrollo

```bash
python manage.py runserver
```

### 7. Crear Superusuario (Opcional)

```bash
python manage.py createsuperuser
```
