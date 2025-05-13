// routes/categorias.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/categorias.controller');

router.get('/', controller.getAll);
router.get('/categorias/:id', controller.getById);
router.post('/crear', controller.create);
router.put('/modificar/:id', controller.update);
router.delete('/eliminar/:id', controller.delete);

module.exports = router;