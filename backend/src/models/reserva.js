const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
    fecha: {
        type: String, // Cambiado de Date a String para compatibilidad con el frontend
        required: true
    },
    hora: {
        type: String,
        required: true
    },
    numeroPersonas: {
        type: Number,
        required: true,
        min: 1
    },
    nombre: {
        type: String
    },
    telefono: {
        type: String
    },
    estado: {
        type: String,
        enum: ['confirmada', 'pendiente', 'cancelada'],
        default: 'pendiente'
    }
});

const Reserva = mongoose.model('Reserva', reservaSchema);

module.exports = Reserva;