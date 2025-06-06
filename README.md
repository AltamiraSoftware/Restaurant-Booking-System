# 🍽️ Sistema de Reservas de Restaurante

![Estado del Proyecto](https://img.shields.io/badge/Estado-En%20Desarrollo-green)
![Versión](https://img.shields.io/badge/Versión-1.0.0-blue)
![Licencia](https://img.shields.io/badge/Licencia-MIT-yellow)

## 📝 Descripción

Sistema web fullstack desarrollado con Vue.js y Node.js que permite la gestión integral de reservas para restaurantes. Este proyecto fue desarrollado como parte de mi formación en Desarrollo Web, demostrando mis habilidades en el desarrollo tanto frontend como backend.

### ✨ Características Principales

- 📱 Diseño responsive y moderno
- 🎨 Interfaz intuitiva para realizar reservas
- 📊 Panel de administración de reservas
- 🍴 Gestión digital del menú
- ⏰ Sistema de verificación de disponibilidad en tiempo real

## Estructura del Proyecto

```
reserva-app
├── backend               # Código del servidor
│   ├── src
│   │   ├── app.js       # Punto de entrada del backend
│   │   ├── controllers   # Controladores de la aplicación
│   │   ├── routes        # Rutas de la API
│   │   └── models        # Modelos de datos
│   ├── package.json      # Dependencias del backend
│   └── README.md         # Documentación del backend
├── frontend              # Código del cliente
│   ├── src
│   │   ├── main.js       # Punto de entrada del frontend
│   │   ├── App.vue       # Componente raíz de Vue
│   │   ├── components     # Componentes de la aplicación
│   │   └── views         # Vistas de la aplicación
│   ├── package.json      # Dependencias del frontend
│   └── README.md         # Documentación del frontend
└── README.md             # Documentación general del proyecto
```

## 🛠️ Tecnologías Utilizadas

### Frontend
- Vue.js 3 
- CSS moderno con variables y diseño responsive
- Sistema de componentes modular

### Backend
- Node.js
- Express
- MongoDB
- RESTful API

## ⚙️ Instalación y Configuración

### Prerrequisitos
- Node.js (v14 o superior)
- MongoDB
- npm o yarn

### Pasos de Instalación

1. Clonar el repositorio
```powershell
git clone https://github.com/tuusuario/reserva-app.git
cd reserva-app
```

2. Instalar dependencias del frontend
```powershell
cd frontend
npm install
```

3. Instalar dependencias del backend
```powershell
cd ../backend
npm install
```

4. Iniciar el servidor de desarrollo
```powershell
# En la carpeta backend
npm run dev

# En la carpeta frontend
npm run serve
```

## 🚀 Uso

1. Acceder a la aplicación web en `http://localhost:8080`
2. Navegar por el menú digital
3. Seleccionar fecha y hora para la reserva
4. Completar el formulario con los datos personales
5. Confirmar la reserva

## 💡 Características Técnicas Destacadas

- Arquitectura MVC
- API RESTful con Express
- Sistema de validación en tiempo real
- Manejo de estados y props en Vue.js
- Integración con base de datos MongoDB
- Middlewares personalizados para manejo de errores
- Sistema de rutas modular

## 📈 Mejoras Futuras

- [ ] Implementación de autenticación de usuarios
- [ ] Sistema de notificaciones por email
- [ ] Integración con pasarela de pagos
- [ ] Sistema de fidelización de clientes
- [ ] Panel de administración avanzado

## 👤 Autor

- Nombre: [Tu Nombre]
- Portfolio: [Tu Portfolio]
- LinkedIn: [Tu LinkedIn]
- GitHub: [Tu GitHub]

## 📞 Contacto

Para cualquier consulta sobre el proyecto:
- Email: +34667810234
- LinkedIn: [Tu LinkedIn]

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.