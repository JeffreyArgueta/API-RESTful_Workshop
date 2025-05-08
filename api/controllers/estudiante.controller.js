// controllers/estudiante.controller.js
const connection = require('../database/db');

exports.getAll = (req, res) => {
  connection.query('SELECT * FROM estudiantes', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getById = (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM estudiantes WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
  });
};

exports.create = (req, res) => {
  const { nombre, correo } = req.body;
  connection.query('INSERT INTO estudiantes (nombre, correo) VALUES (?, ?)', [nombre, correo], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: result.insertId, nombre, correo });
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  const { nombre, correo } = req.body;
  connection.query('UPDATE estudiantes SET nombre = ?, correo = ? WHERE id = ?', [nombre, correo, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id, nombre, correo });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM estudiantes WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: 'Estudiante eliminado' });
  });
};