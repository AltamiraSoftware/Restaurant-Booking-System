const express = require('express');
const router = express.Router();
const ReservaController = require('../controllers/reservaController');

const reservaController = new ReservaController();

router.post('/', reservaController.crearReserva);
router.get('/disponibilidad', reservaController.verificarDisponibilidad);
router.get('/', reservaController.listarReservas);

module.exports = router;