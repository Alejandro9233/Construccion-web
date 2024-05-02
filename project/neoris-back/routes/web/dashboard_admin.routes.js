// Importar los controladores del dsahboard de admins y el router
const router = require('express').Router();
const dashboardAdminController = require('../../controllers/web/dashboard_admin.controllers');

// Conexiones por fecha
/* Arreglo de objetos en el siguiente formato:
{
    "log_date": "2024-04-23T00:00:00.000Z",
    "cantidad_visitas": 3
}
*/
router.get('/conexiones-por-fecha', dashboardAdminController.getConexionesPorFecha);

// Cursos populares
/* Arreglo de objetos en el siguiente formato:	
{
    "curso": "SQL Fundamentals",
    "usuarios_inscritos": 2,
    "porcentaje_progreso_promedio": 62
}
*/
router.get('/cursos-populares', dashboardAdminController.getCursosPopulares);

// minutos de juego (de todos los usuarios) promedio por fecha
/* Arreglo de objetos en el siguiente formato:
{
    "fecha": "2024-04-23T00:00:00.000Z",
    "promedio_minutos_de_juego": 25
}
*/
router.get('/minutos-juego-por-fecha', dashboardAdminController.getMinutosJuegoPromedioPorFecha);

// Promedio total de progreso de todos los usuarios en todos los cursos
/* JSON con un solo objeto en el siguiente formato:
{
    "promedio_porcentaje_avance_total": 40
}
*/
router.get('/promedio-total-progreso', dashboardAdminController.getPromedioTotalProgreso);

// Conseguir todos los usuarios que no son admins para listar el equipo de trabajo
/* Arreglo de objetos en el siguiente formato:
{
    "nombre_usuario": "johndoe",
    "foto_de_perfil": null,
    "ultima_conexion": "2024-04-30T03:59:06.330Z"
}
*/
router.get('/usuarios-no-admins', dashboardAdminController.getUsuariosNoAdmins);

module.exports = router;