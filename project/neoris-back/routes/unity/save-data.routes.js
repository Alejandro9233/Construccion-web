// Importar router y controladores de unity
const router = require('express').Router();
const unityController = require('../../controllers/unity/save-data.controllers');

// se actulizan los datos de guardado del usuario
router.put('/save-data', unityController.updateSaveData);

// se consiguen los datos de guardado para cargarlos dentro del juego
router.get('/save-data/:id_user', unityController.getSaveData);

module.exports = router;