const cursosControllers = require('../../controllers/unity/cursos.controllers');
const router = require('express').Router();

// ruta para conseguir los cursos de un usuario
router.get('/cursos/:id_user', cursosControllers.getCursos);

module.exports = router;