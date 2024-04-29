// Importar router y controladores de unity
const router = require('express').Router();
const unityController = require('../../controllers/unity/save-data.controllers');

router.put('/save-data/:id_user', unityController.updateSaveData);

router.get('/save-data/:id_user', unityController.getSaveData);

module.exports = router;