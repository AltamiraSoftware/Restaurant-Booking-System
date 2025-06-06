const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const reservaRoutes = require('./routes/reservaRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Conexión a MongoDB con opciones mejoradas
mongoose.connect('mongodb://127.0.0.1:27017/reservas_restaurante', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
})
.then(() => {
    console.log('Conectado a MongoDB correctamente');
})
.catch(err => {
    console.error('Error al conectar a MongoDB:', err);
    process.exit(1);
});

// Agregar middleware para verificar el estado de la conexión
app.use((req, res, next) => {
    if (mongoose.connection.readyState !== 1) {
        return res.status(500).json({ error: 'La conexión a la base de datos no está lista' });
    }
    next();
});

// Rutas
app.use('/api/reservas', reservaRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});