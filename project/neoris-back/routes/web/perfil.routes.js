// Importar el router y los controladores de perfil
const router = require('express').Router();
const perfilController = require('../../controllers/web/perfil.controllers');

// get promedio de avance en todos los cursos
/* Formato esperado de respuesta:
{
    "porcentaje_promedio": 61
}
*/
router.get('/promedio-avance/:id_user', perfilController.getAvance);

// get listado de cursos web card
/* Formato esperado de respuesta, arreglo de objetos de los cursos a los que está inscrito el usuario:
{
    "path_de_curso": "Generative AI",
    "nombre_curso": "Chat GPT for Python",
    "imagen": "https://i.blogs.es/1d8a5b/python1/450_1000.jpg"
    "link_al_curso": "URL"
    "porcentaje_pogreso": 5
    "id_curso": 5
}
*/
router.get('/listado-cursos-web-card/:id_user', perfilController.getListadoCursosWebCard); // nuevo

// get profile card
/* Formato esperado de respuesta:
{
    "neo_coins": 0,
    "neo_stars": 0,
    "cursos_inscritos": 3
}
*/
router.get('/profile-card/:id_user', perfilController.getProfileCard);

module.exports = router;

