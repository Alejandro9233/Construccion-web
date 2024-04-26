// Importar router y controladores de unity
const unityController = require('../../controllers/unity/save-data.controllers');
const router = require('express').Router();

router.put('/save-data/:id_user', unityController.updateSaveData);

router.get('/save-data/:id_user', unityController.getSaveData);

module.exports = router;