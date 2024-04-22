// Importar los controladores de usuarios y el router
const usuariosController = require('../controllers/usuarios.controllers');
const router = require('express').Router();

// Asignar endpoints y controladores al router
router.get('/usuarios', usuariosController.getUsuarios);

router.get('/leaderboard', usuariosController.getLeaderboard);


module.exports = router;
