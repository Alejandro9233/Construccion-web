const router = require('express').Router();
const logsControllers = require('../../controllers/unity/logs.controllers');

// ruta para crear logs de conexión y desconexión dentro del juego
router.post('/log-conexion/:id_user/:connection_type', logsControllers.loggearConexion);

module.exports = router;
