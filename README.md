# Plataforma de Eventos e Inscripciones - Backend II

## Pre-entrega 1: Refactor Arquitectónico Inicial

Base inicial y estructura modular en capas para el backend de la plataforma de gestión de eventos, usuarios e inscripciones.

---

## Como Ejecutarlo
1. Instalar dependencias: npm install
2. Modo desarrollo (recarga automática): npm run dev
El servidor quedará escuchando en http://localhost:3000 (o el puerto configurado).

## Temática Elegida
API REST modular para la gestión de una **Plataforma de Eventos e Inscripciones**, diseñada para administrar eventos, usuarios, inscripciones y control de cupos. En esta primera etapa se establece la arquitectura base en capas y la configuración inicial del servidor.

## ⚙️ Configuración de Variables de Entorno
1. Crear un archivo `.env` en la raíz del proyecto basándose en `.env.example`:
   ```env
   PORT=
   NODE_ENV=
   MONGO_URL=mongodb:...
   JWT_SECRET=tu_clave_secreta```

## Estructura del Proyecto

El proyecto sigue una arquitectura en capas para garantizar escalabilidad y separación de responsabilidades:

```text
src/
├── config/         # Configuración del entorno y variables
├── controllers/    # Controladores de las peticiones HTTP
├── dao/            # Data Access Object (acceso a datos)
├── middlewares/    # Middlewares de aplicación y rutas
├── models/         # Esquemas y modelos de datos (Mongoose)
├── repositories/   # Capa de repositorios
├── routes/         # Definición de rutas y endpoints
├── services/       # Lógica de negocio
├── utils/          # Funciones y utilidades generales
├── app.js          # Configuración de Express y middlewares
└── server.js       # Inicialización del servidor HTTP y puerto```

## Rutas Disponibles

GET /api/health -> Verifica el estado y disponibilidad del servidor
GET /api/events -> Retorna el listado inicial de eventos (payload: [])
GET /api/sessions -> Verifica la inicialización del módulo de sesiones/usuarios