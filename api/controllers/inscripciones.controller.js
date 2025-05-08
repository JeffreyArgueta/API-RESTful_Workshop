// controllers/inscripciones.controller.js
const connection = require('../database/db');

// Obtener todas las inscripciones
exports.getAll = (req, res) => {
  const sql = 'SELECT * FROM inscripciones';
  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al obtener inscripciones' });
    res.json(results);
  });
};

// Obtener una inscripción por ID
exports.getById = (req, res) => {
  const id = req.params.id;
  const sql = 'SELECT * FROM inscripciones WHERE id = ?';
  connection.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al obtener la inscripción' });
    res.json(results[0]);
  });
};

// Crear una nueva inscripción
exports.create = (req, res) => {
  const { id_estudiante, id_curso, fecha_inscripcion } = req.body;

  const sql = `
    INSERT INTO inscripciones (id_estudiante, id_curso, fecha_inscripcion)
    VALUES (?, ?, ?)
  `;

  const values = [id_estudiante, id_curso, fecha_inscripcion];

  connection.query(sql, values, (err, result) => {
    if (err) return res.status(500).json({ error: 'Error al registrar la inscripción' });

    res.json({
      mensaje: 'Inscripción registrada correctamente',
      id: result.insertId,
      id_estudiante,
      id_curso,
      fecha_inscripcion
    });
  });
};

// Actualizar una inscripción
exports.update = (req, res) => {
  const id = req.params.id;
  const { id_estudiante, id_curso, fecha_inscripcion } = req.body;

  const sql = `
    UPDATE inscripciones
    SET id_estudiante = ?, id_curso = ?, fecha_inscripcion = ?
    WHERE id = ?
  `;

  const values = [id_estudiante, id_curso, fecha_inscripcion, id];

  connection.query(sql, values, (err) => {
    if (err) return res.status(500).json({ error: 'Error al actualizar la inscripción' });

    res.json({
      mensaje: 'Inscripción actualizada correctamente',
      id,
      id_estudiante,
      id_curso,
      fecha_inscripcion
    });
  });
};

// Eliminar una inscripción
exports.delete = (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM inscripciones WHERE id = ?';
  connection.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ error: 'Error al eliminar la inscripción' });
    res.json({ mensaje: 'Inscripción eliminada correctamente' });
  });
};
