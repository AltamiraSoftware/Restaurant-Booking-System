# Reserva App

Este proyecto es una aplicación web de reservas que permite a los usuarios realizar reservas de mesas en un restaurante. La aplicación está dividida en dos partes: el frontend, desarrollado con Vue.js, y el backend, desarrollado con Node.js y Express.

## Estructura del Proyecto

```
reserva-app
├── backend          # Código del servidor backend
│   ├── src
│   │   ├── app.js                  # Punto de entrada del backend
│   │   ├── controllers
│   │   │   └── reservaController.js # Controlador para manejar la lógica de reservas
│   │   ├── routes
│   │   │   └── reservaRoutes.js     # Rutas para las reservas
│   │   └── models
│   │       └── reserva.js           # Modelo de datos para las reservas
│   ├── package.json                 # Dependencias y scripts del backend
│   └── README.md                    # Documentación del backend
├── frontend         # Código del cliente frontend
│   ├── src
│   │   ├── main.js                  # Punto de entrada del frontend
│   │   ├── App.vue                  # Componente raíz de la aplicación
│   │   ├── components
│   │   │   └── ReservaForm.vue      # Componente para el formulario de reservas
│   │   └── views
│   │       └── Home.vue             # Vista principal de la aplicación
│   ├── package.json                 # Dependencias y scripts del frontend
│   └── README.md                    # Documentación del frontend
└── README.md                        # Documentación general del proyecto
```

## Instalación

Para instalar las dependencias del frontend, navega a la carpeta `frontend` y ejecuta:

```
npm install
```

Para instalar las dependencias del backend, navega a la carpeta `backend` y ejecuta:

```
npm install
```

## Ejecución

Para ejecutar el frontend, navega a la carpeta `frontend` y ejecuta:

```
npm run serve
```

Para ejecutar el backend, navega a la carpeta `backend` y ejecuta:

```
npm start
```

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la licencia MIT.