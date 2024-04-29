// Importar los controladores de usuarios y el router
const router = require('express').Router();
const usuariosController = require('../../controllers/unity/usuarios.controllers');

// Asignar endpoints y controladores al router
router.get('/leaderboard', usuariosController.getLeaderboard);

router.get('/prueba', usuariosController.getPrueba);


module.exports = router;
