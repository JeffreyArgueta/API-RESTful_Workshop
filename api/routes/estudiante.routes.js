// routes/estudiante.routes.js
const express = require('express');
const router = express.Router();
const estudianteController = require('../controllers/estudiante.controller');

router.get('/', estudianteController.getAll);
router.get('/estudiante/:id', estudianteController.getById);
router.post('/crear', estudianteController.create);
router.put('/modificar/:id', estudianteController.update);
router.delete('/eliminar/:id', estudianteController.delete);

module.exports = router;