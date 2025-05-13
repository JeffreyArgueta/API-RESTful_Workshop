// routes/cursos.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/cursos.controller');

router.get('/', controller.getAll);
router.get('/cursos/:id', controller.getById);
router.post('/crear', controller.create);
router.put('/modificar/:id', controller.update);
router.delete('/eliminar/:id', controller.delete);

module.exports = router;