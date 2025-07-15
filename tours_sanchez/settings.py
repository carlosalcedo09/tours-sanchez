import os
from pathlib import Path
from django.urls import reverse_lazy
from dotenv import load_dotenv
load_dotenv()
# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent



# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-s1e##el-1@*kdgu=c=2!+hie7if2cjc@uwgg!()nrb2diyj&c4'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    
    'unfold',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # Tus apps
    'usuarios',
    'buses',
    'asientos',
    'rutas',
    'viajes',
    'pasajeros',
    'compras',
    'notificaciones',
     # DRF
    'rest_framework',
    #frontend
    'frontend',
]


MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'tours_sanchez.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'tours_sanchez.wsgi.application'


# Database
# https://docs.djangoproject.com/en/5.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': os.getenv('DATABASE_ENGINE'),
        'NAME': os.getenv('DATABASE_NAME'),
        'USER': os.getenv('DATABASE_USER'),
        'PASSWORD': os.getenv('DATABASE_PASSWORD'),
        'HOST': os.getenv('DATABASE_HOST'),
        'PORT': int(os.getenv('DATABASE_PORT')),
        #'OPTIONS':{
        #    'driver': 'ODBC Driver 17 for SQL Server'
        #}
    }
}


# Password validationp
# https://docs.djangoproject.com/en/5.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.2/howto/static-files/


# Default primary key field type
# https://docs.djangoproject.com/en/5.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

AUTH_USER_MODEL = 'usuarios.Usuario'

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    )
}


STATIC_URL = '/static/'
STATICFILES_DIRS = [BASE_DIR / 'frontend/static']
STATIC_ROOT = BASE_DIR / 'staticfiles'

STATICFILES_DIRS = [
    BASE_DIR / "static",
]

UNFOLD = {
    "SITE_TITLE": "Panel de Administración",
    "SITE_HEADER": " ",
    "SITE_ICON": "/static/img/logo.jpeg",
    "SITE_TAGLINE": "Bienvenido al sistema de gestión",
    "SHOW_HISTORY": True,
    "SHOW_VIEW_ON_SITE": True,
    "COPYRIGHT": "© 2025 Tours Sánchez",
    "THEME": "light",
    "LOGIN": {
         "image": "https://img.freepik.com/fotos-premium/edificio-corporativo_948023-2557.jpg",
    },
    "COLORS": {
    "primary": {
        "50": "14 11 82",
        "100": "14 11 82",
        "200": "14 11 82",
        "300": "14 11 82",
        "400": "14 11 82",
        "500": "14 11 82",
        "600": "14 11 82",
        "700": "14 11 82",
        "800": "14 11 82",
        "900": "14 11 82",
        "950": "14 11 82"
    }
    },
    "SIDEBAR": {
        "show_search": True,
        "show_all_applications": False,
        "navigation": [
            {
                "title": "Seguridad",
                "separator": True,
                "items": [
                    {
                        "title": "Usuarios",
                        "icon": "person",
                        "link": reverse_lazy("admin:usuarios_usuario_changelist"),
                    },
                    {
                        "title": "Permisos",
                        "icon": "lock",
                        "link": reverse_lazy("admin:auth_group_changelist"),
                    }
                    
                ],
            },
            {
                "title": "Gestion de viajes",
                "separator": True,
                "items": [
                    {
                        "title": "Buses",
                        "icon": "view_list",
                        "link": reverse_lazy("admin:buses_bus_changelist"),
                    },
                    {
                        "title": "Pasajeros",
                        "icon": "person",
                        "link": reverse_lazy("admin:pasajeros_pasajero_changelist"),
                    },
                    {
                        "title": "Rutas",
                        "icon": "route",
                        "link": reverse_lazy("admin:rutas_ruta_changelist"),
                    },
                    {
                        "title": "Asientos",
                        "icon": "tune",
                        "link": reverse_lazy("admin:asientos_asiento_changelist"),
                    },
                    {
                        "title": "Compras",
                        "icon": "business_center",
                        "link": reverse_lazy("admin:compras_compra_changelist"),
                    },
                    
                ],
            },
            {
                "title": "Gestión de notificaciones",
                "separator": True,
                "items": [
                    {
                        "title": "Notificaciones",
                        "icon": "campaign",
                        "link": reverse_lazy("admin:notificaciones_notificacion_changelist"),
                    },
                    
                ],
            },
        ],
    },

    "NAV": [
        {
            "title": "Dashboard",
            "icon": "heroicons-outline:home",
            "url": "/admin/",
        },
        {
            "title": "Pasajeros",
            "icon": "heroicons-outline:user",
            "model": "pasajeros.Pasajero",
        },
        {
            "title": "Reservas",
            "icon": "heroicons-outline:calendar",
            "model": "reservas.Reserva",
        },
    ],
}
