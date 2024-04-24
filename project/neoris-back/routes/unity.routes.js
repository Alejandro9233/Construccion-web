// Importar router y controladores de unity
const unityController = require('../controllers/unity.controllers');
const router = require('express').Router();

router.put('/save-data', unityController.updateSaveData);

router.get('/save-data/:user_id', unityController.getSaveData);

module.exports = router;