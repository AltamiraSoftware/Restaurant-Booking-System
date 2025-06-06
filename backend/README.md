# Reserva App - Backend

Este es el backend de la aplicación de reservas, desarrollado con Node.js y Express. A continuación se detallan las instrucciones para configurar y ejecutar el servidor.

## Requisitos

- Node.js (versión 14 o superior)
- MongoDB (local o en la nube)

## Instalación

1. Clona el repositorio:

   ```
   git clone <URL_DEL_REPOSITORIO>
   ```

2. Navega al directorio del backend:

   ```
   cd reserva-app/backend
   ```

3. Instala las dependencias:

   ```
   npm install
   ```

## Configuración

Asegúrate de tener una base de datos MongoDB configurada. Puedes utilizar una base de datos local o un servicio en la nube como MongoDB Atlas. 

Configura la conexión a la base de datos en el archivo `src/app.js`.

## Ejecución

Para iniciar el servidor, ejecuta el siguiente comando:

```
npm start
```

El servidor se ejecutará en `http://localhost:3000` por defecto.

## Rutas

- `POST /reservas`: Crear una nueva reserva.
- `GET /reservas`: Listar todas las reservas.
- `GET /reservas/disponibilidad`: Verificar la disponibilidad de reservas.

## Estructura del Proyecto

- `src/app.js`: Punto de entrada de la aplicación.
- `src/controllers/reservaController.js`: Lógica de negocio para las reservas.
- `src/routes/reservaRoutes.js`: Definición de las rutas de la aplicación.
- `src/models/reserva.js`: Modelo de datos para las reservas.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request para discutir cambios.

## Licencia

Este proyecto está bajo la Licencia MIT.