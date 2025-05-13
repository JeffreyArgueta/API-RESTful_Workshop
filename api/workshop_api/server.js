// server.js
const express = require('express');
require('dotenv').config();
const estudianteRoutes = require('./routes/estudiante.routes');
const profesorRoutes = require('./routes/profesores.routes');
const categoriaRoutes = require('./routes/categorias.routes');
const cursoRoutes = require('./routes/cursos.routes');
const inscripcionRoutes = require('./routes/inscripciones.routes');

const app = express();
app.use(express.json());

app.use('/estudiantes', estudianteRoutes);
app.use('/profesores', profesorRoutes);
app.use('/categorias', categoriaRoutes);
app.use('/cursos', cursoRoutes);
app.use('/inscripciones', inscripcionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});