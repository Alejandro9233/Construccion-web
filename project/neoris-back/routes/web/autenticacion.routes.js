const router = require('express').Router();
const autenticacionControllers = require('../../controllers/web/autenticacion.controllers');

// Rutas para autenticar usuarios regresa:
/* Regresa un solo objeto en el siguiente formato:
{
    "id_usuario": 2,
    "nombre_usuario": "user_2",
    "e_mail": "user2@gmail.com",
    "ubicacion": "City B",
    "departamento": "Marketing",
    "puesto": "Analyst",
    "es_admin": false,
    "foto_de_perfil": null,
    "cursos_favoritos": "1 2 3"
    "validacion": true
}
*/
router.post('/verificar-usuario', autenticacionControllers.verificarUsuario);

module.exports = router;
