const router = require('express').Router();
const cursosUsuarioControllers = require('../../controllers/web/cursos_usuario.controllers');

// Ruta para conseguir cursos en los que está inscrito un usuario
/* Respuesta, arreglo de:
{
    "path_de_curso": "Generative AI",
    "nombre_curso": "ChatGPT Prompt Engineering",
    "imagen": "https://historiaglobalonline.com/wp-content/uploads/2023/06/cabecera.jpeg",
    "link_al_curso": "https://www.udemy.com/course/chatgpt-prompt-engineering-for-beginners/?couponCode=LETSLEARNNOWPP",
    "es_favorito": false,
    "duracion": 10,
    "porcentaje_progreso": 75
}
*/
router.get('/cursos-inscritos-usuario/:id_user', cursosUsuarioControllers.getCursosUsuario);

router.post('/crear-progreso-curso/:id_user/:id_course/:new_progress', cursosUsuarioControllers.crearProgresoCurso);

router.put('/actualizar-progreso-curso/:id_user/:id_course/:new_progress', cursosUsuarioControllers.actualizarProgresoCurso);

module.exports = router;