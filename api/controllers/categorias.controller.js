// controllers/categorias.controller.js
const connection = require('../database/db');

// Obtener todas las categorías
exports.getAll = (req, res) => {
  const sql = 'SELECT * FROM categorias';
  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al obtener las categorías' });
    res.json(results);
  });
};

// Obtener una categoría por ID
exports.getById = (req, res) => {
  const id = req.params.id;
  const sql = 'SELECT * FROM categorias WHERE id = ?';
  connection.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al obtener la categoría' });
    res.json(results[0]);
  });
};

// Crear una nueva categoría
exports.create = (req, res) => {
  const { nombre } = req.body;

  const sql = 'INSERT INTO categorias (nombre) VALUES (?)';

  connection.query(sql, [nombre], (err, result) => {
    if (err) return res.status(500).json({ error: 'Error al registrar la categoría' });

    res.json({
      mensaje: 'Categoría registrada correctamente',
      id: result.insertId,
      nombre
    });
  });
};

// Actualizar una categoría
exports.update = (req, res) => {
  const id = req.params.id;
  const { nombre } = req.body;

  const sql = 'UPDATE categorias SET nombre = ? WHERE id = ?';

  connection.query(sql, [nombre, id], (err) => {
    if (err) return res.status(500).json({ error: 'Error al actualizar la categoría' });

    res.json({
      mensaje: 'Categoría actualizada correctamente',
      id,
      nombre
    });
  });
};

// Eliminar una categoría
exports.delete = (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM categorias WHERE id = ?';
  connection.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ error: 'Error al eliminar la categoría' });
    res.json({ mensaje: 'Categoría eliminada correctamente' });
  });
};
