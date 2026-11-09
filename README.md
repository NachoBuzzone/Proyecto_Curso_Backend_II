# Plataforma de Eventos e Inscripciones - Backend II

## Pre-entrega 2: Registro Seguro de Usuarios

API REST modular para la gestión de una **Plataforma de Eventos e Inscripciones**, diseñada para administrar eventos, usuarios, inscripciones y control de cupos. 

En esta etapa se implementa el flujo completo de **registro seguro de usuarios** con persistencia en MongoDB mediante Mongoose, validaciones en la frontera, normalización de datos y encriptación de contraseñas con `bcrypt`.

---

## Funcionalidades Implementadas

### 1. Modelo de Usuario (`User`) con Mongoose
* **`first_name`**: Nombre del usuario (obligatorio).
* **`last_name`**: Apellido del usuario (obligatorio).
* **`email`**: Correo electrónico único e indexado.
* **`password`**: Contraseña almacenada como hash seguro.
* **`role`**: Rol del usuario restringido por `enum` (`user`, `organizer`, `admin`), con valor por defecto `user`.

### 2. Registro Seguro (`POST /api/sessions/register`)
* **Validación de entrada**: Middleware para verificar campos obligatorios y formato/longitud de contraseña.
* **Normalización de datos**: Conversión del email a minúsculas y eliminación de espacios en blanco (`trim`).
* **Control de duplicados**: Detección y manejo de errores por correo ya registrado retornando estado HTTP `409 Conflict`.
* **Encriptación**: Hasheo asíncrono de contraseñas mediante `bcrypt`.
* **Sanitización de respuesta**: Retorno de los datos del usuario creado excluyendo el hash de la contraseña por seguridad.

---

## Estructura del Proyecto

El proyecto sigue una arquitectura en capas para garantizar escalabilidad y separación de responsabilidades:

```text
src/
├── config/         # Configuración del entorno, base de datos y variables
├── controllers/    # Controladores de las peticiones HTTP
├── dao/            # Data Access Object (acceso a datos)
├── middlewares/    # Middlewares de validación y manejo de errores
├── models/         # Esquemas y modelos de datos (Mongoose)
├── repositories/   # Capa de repositorios
├── routes/         # Definición de rutas y endpoints
├── services/       # Lógica de negocio
├── utils/          # Funciones y utilidades generales (bcrypt, respuestas)
├── app.js          # Configuración de Express y middlewares globales
└── server.js       # Inicialización del servidor HTTP y conexión a DB