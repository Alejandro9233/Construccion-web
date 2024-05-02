const router = require('express').Router();
const cursosControllers = require('../../controllers/unity/cursos.controllers');

// ruta para conseguir los cursos de un usuario
router.get('/cursos/:id_user', cursosControllers.getCursos);

// actualizar el estado de estrellas reclamadas
router.put('/actualizar-estrellas-reclamadas', cursosControllers.actualizarEstrellasReclamadas);

module.exports = router;