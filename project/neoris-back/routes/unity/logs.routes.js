const router = require('express').Router();
const logsControllers = require('../../controllers/unity/logs.controllers');

router.post('/log-conexion/:id_user/:connection_type', logsControllers.loggearConexion);

module.exports = router;
