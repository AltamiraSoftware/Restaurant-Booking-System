const Reserva = require('../models/reserva');

class ReservaController {
    async crearReserva(req, res) {
        try {
            const { fecha, hora, numeroPersonas, nombre, telefono } = req.body;
            
            // Validación de campos requeridos
            if (!fecha || !hora || !numeroPersonas) {
                return res.status(400).json({ 
                    error: 'Faltan campos obligatorios',
                    detalles: 'Se requieren fecha, hora y número de personas' 
                });
            }

            // Asegurarse de que los datos coinciden con el formato de la BD
            const reservaData = {
                fecha: fecha,
                hora: hora,
                numeroPersonas: Number(numeroPersonas),
                nombre: nombre || '',
                telefono: telefono || '',
                estado: 'pendiente'
            };

            const reserva = new Reserva(reservaData);
            await reserva.save();
            
            console.log('Reserva creada:', reserva);
            res.status(201).json(reserva);
        } catch (error) {
            console.error('Error al crear reserva:', error);
            res.status(400).json({ 
                error: 'Error al crear la reserva', 
                detalle: error.message 
            });
        }
    }

    async verificarDisponibilidad(req, res) {
        try {
            const { fecha, hora, numeroPersonas } = req.query;
            // Busca reservas existentes para la fecha y hora dadas
            const reservas = await Reserva.find({ fecha, hora });
            // Lógica simple: máximo 10 personas por franja horaria
            const totalReservado = reservas.reduce((sum, r) => sum + r.numeroPersonas, 0);
            const capacidadMaxima = 10;
            const disponible = (totalReservado + Number(numeroPersonas)) <= capacidadMaxima;
            res.json({ disponible, totalReservado, capacidadMaxima });
        } catch (error) {
            res.status(500).json({ error: 'Error al verificar disponibilidad', detalle: error.message });
        }
    }

    async listarReservas(req, res) {
        try {
            console.log('Intentando obtener reservas...');
            const reservas = await Reserva.find();
            console.log('Reservas encontradas:', reservas);
            res.json(reservas);
        } catch (error) {
            console.error('Error detallado al obtener reservas:', error);
            res.status(500).json({ 
                error: 'Error al obtener reservas', 
                detalle: error.message,
                stack: error.stack 
            });
        }
    }
}

module.exports = ReservaController;