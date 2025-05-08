// controllers/profesores.controller.js
const connection = require('../database/db');

// Obtener todos los profesores
exports.getAll = (req, res) => {
  const sql = 'SELECT * FROM profesores';
  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al obtener los profesores' });
    res.json(results);
  });
};

// Obtener un profesor por ID
exports.getById = (req, res) => {
  const id = req.params.id;
  const sql = 'SELECT * FROM profesores WHERE id = ?';
  connection.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al obtener el profesor' });
    res.json(results[0]);
  });
};

// Crear un nuevo profesor
exports.create = (req, res) => {
  const { nombre, especialidad } = req.body;

  const sql = 'INSERT INTO profesores (nombre, especialidad) VALUES (?, ?)';

  connection.query(sql, [nombre, especialidad], (err, result) => {
    if (err) return res.status(500).json({ error: 'Error al registrar el profesor' });

    res.json({
      mensaje: 'Profesor registrado correctamente',
      id: result.insertId,
      nombre,
      especialidad
    });
  });
};

// Actualizar un profesor
exports.update = (req, res) => {
  const id = req.params.id;
  const { nombre, especialidad } = req.body;

  const sql = 'UPDATE profesores SET nombre = ?, especialidad = ? WHERE id = ?';

  connection.query(sql, [nombre, especialidad, id], (err) => {
    if (err) return res.status(500).json({ error: 'Error al actualizar el profesor' });

    res.json({
      mensaje: 'Profesor actualizado correctamente',
      id,
      nombre,
      especialidad
    });
  });
};

// Eliminar un profesor
exports.delete = (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM profesores WHERE id = ?';
  connection.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ error: 'Error al eliminar el profesor' });
    res.json({ mensaje: 'Profesor eliminado correctamente' });
  });
};
