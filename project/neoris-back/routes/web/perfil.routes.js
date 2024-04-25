//
const router = require('express').Router();
const perfilController = require('../../controllers/web/perfil.controllers');

// get promedio de avance en todos los cursos
router.get('/promedio-avance/:id_user', perfilController.getAvance);

// get listado de cursos
router.get('/listado-cursos-web', perfilController.getListadoCursosWeb);

module.exports = router;

