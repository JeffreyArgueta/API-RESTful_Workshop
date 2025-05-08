-- Crear base de datos
CREATE DATABASE IF NOT EXISTS gestion_cursos;
USE gestion_cursos;

CREATE TABLE estudiantes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  correo VARCHAR(100) UNIQUE,
  fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE profesores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  especialidad VARCHAR(100),
  fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categorias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100)
);

CREATE TABLE cursos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(100),
  descripcion TEXT,
  dia_Inicio date,
  dia_finaliza date,
  id_categoria INT,
  id_profesor INT,
  FOREIGN KEY (id_categoria) REFERENCES categorias(id),
  FOREIGN KEY (id_profesor) REFERENCES profesores(id)
);

CREATE TABLE inscripciones (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_estudiante INT,
  id_curso INT,
  fecha_inscripcion DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_estudiante) REFERENCES estudiantes(id),
  FOREIGN KEY (id_curso) REFERENCES cursos(id)
);