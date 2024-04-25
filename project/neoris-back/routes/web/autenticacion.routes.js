const router = require('express').Router();
const autenticacionControllers = require('../../controllers/web/autenticacion.controllers');

// Rutas para autenticar usuarios regresa:
/* Regresa un solo objeto en el siguiente formato:
{
    "id_usuario": 1,
    "nombre_usuario": "user_1",
    "e_mail": "user1@tec.mx",
    "ubicación": "City A",
    "departamento": "IT",
    "puesto": "Developer",
    "es_admin": true,
    "validacion": true
}
*/
router.post('/verificar-usuario', autenticacionControllers.verificarUsuario);

module.exports = router;
