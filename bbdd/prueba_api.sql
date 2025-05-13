-- Crear la base de datos
CREATE DATABASE prueba_api;

-- Usar la base de datos
USE prueba_api;

-- Crear la tabla de usuarios con almacenamiento de contraseñas
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Índice para búsquedas rápidas por email
CREATE INDEX idx_users_email ON users(email);

-- Insertar datos de prueba con contraseñas en texto plano (NO SEGURO)
-- INSERT INTO users (name, email, password) VALUES
-- ('Juan Pérez', 'juan.perez@example.com', 'password123'),
-- ('María López', 'maria.lopez@example.com', 'contraseñaSegura'),
-- ('Carlos Gómez', 'carlos.gomez@example.com', 'admin2025');
