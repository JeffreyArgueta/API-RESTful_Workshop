// controllers/cursos.controller.js
const connection = require('../database/db');

// Obtener todos los cursos
exports.getAll = (req, res) => {
  const sql = 'SELECT * FROM cursos';
  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al obtener cursos' });
    res.json(results);
  });
};

// Obtener un curso por ID
exports.getById = (req, res) => {
  const id = req.params.id;
  const sql = 'SELECT * FROM cursos WHERE id = ?';
  connection.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al buscar el curso' });
    res.json(results[0]);
  });
};

// Crear un nuevo curso
exports.create = (req, res) => {
  const { titulo, descripcion, dia_Inicio, dia_finaliza, id_categoria, id_profesor } = req.body;

  const sql = `
    INSERT INTO cursos (titulo, descripcion, dia_Inicio, dia_finaliza, id_categoria, id_profesor)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  const values = [titulo, descripcion, dia_Inicio, dia_finaliza, id_categoria, id_profesor];

  connection.query(sql, values, (err, result) => {
    if (err) return res.status(500).json({ error: 'Error al registrar el curso' });

    res.json({
      mensaje: 'Curso registrado correctamente',
      id: result.insertId,
      titulo,
      descripcion,
      dia_Inicio,
      dia_finaliza,
      id_categoria,
      id_profesor
    });
  });
};

// Actualizar un curso
exports.update = (req, res) => {
  const id = req.params.id;
  const { titulo, descripcion, dia_Inicio, dia_finaliza, id_categoria, id_profesor } = req.body;

  const sql = `
    UPDATE cursos
    SET titulo = ?, descripcion = ?, dia_Inicio = ?, dia_finaliza = ?, id_categoria = ?, id_profesor = ?
    WHERE id = ?
  `;

  const values = [titulo, descripcion, dia_Inicio, dia_finaliza, id_categoria, id_profesor, id];

  connection.query(sql, values, (err) => {
    if (err) return res.status(500).json({ error: 'Error al actualizar el curso' });

    res.json({
      mensaje: 'Curso actualizado correctamente',
      id,
      titulo,
      descripcion,
      dia_Inicio,
      dia_finaliza,
      id_categoria,
      id_profesor
    });
  });
};

// Eliminar un curso
exports.delete = (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM cursos WHERE id = ?';
  connection.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ error: 'Error al eliminar el curso' });
    res.json({ mensaje: 'Curso eliminado correctamente' });
  });
};
