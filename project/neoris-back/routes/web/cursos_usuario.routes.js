const router = require("express").Router();
const cursosUsuarioControllers = require("../../controllers/web/cursos_usuario.controllers");

// Ruta para conseguir cursos en los que está inscrito un usuario
/* Respuesta, arreglo de:
{
    "path_de_curso": "Generative AI",
    "nombre_curso": "ChatGPT Prompt Engineering",
    "imagen": "https://historiaglobalonline.com/wp-content/uploads/2023/06/cabecera.jpeg",
    "link_al_curso": "https://www.udemy.com/course/chatgpt-prompt-engineering-for-beginners/?couponCode=LETSLEARNNOWPP",
    "duracion": 10,
    "porcentaje_progreso": 75
}
*/
router.get(
  "/cursos-inscritos-usuario/:id_user",
  cursosUsuarioControllers.getCursosUsuario
);

router.get(
  "/favorite-courses/:id_user",
  cursosUsuarioControllers.getFavoriteCourses
);

// Crea progreso y añade el curos a la tabla de progreso cursos
router.post(
  "/crear-progreso-curso/:id_user/:id_course/:new_progress",
  cursosUsuarioControllers.crearProgresoCurso
);

// Actualiza el progreso del curso de un usuario en la tabal de progreso cursos
router.put(
  "/actualizar-progreso-curso/:id_user/:id_course/:new_progress",
  cursosUsuarioControllers.actualizarProgresoCurso
);

/* is_favorite se pone con un booleano en el formato de 0 o 1 (no true o false), regresa el listado de los nuevos cursos favoritos:
{
    "nuevos_cursos_favoritos": "1 3 2",
    "message": "Cursos favoritos actualizado correctamente"
}
*/
router.put(
  "/actualizar-favorito/:id_user/:id_course/:is_favorite",
  cursosUsuarioControllers.actualizarCursoEsFavorito
);


router.get('/favorite-courses/:id_user', cursosUsuarioControllers.getFavoriteCourses)

module.exports = router;

