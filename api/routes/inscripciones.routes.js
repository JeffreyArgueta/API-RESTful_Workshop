// routes/inscripciones.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/inscripciones.controller');

router.get('/', controller.getAll);
router.get('/inscripcion/:id', controller.getById);
router.post('/crear', controller.create);
router.put('/modificar/:id', controller.update);
router.delete('/eliminar/:id', controller.delete);

module.exports = router;