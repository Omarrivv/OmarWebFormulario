CREATE DATABASE IF NOT EXISTS instituto_valle_grande;

USE instituto_valle_grande;

CREATE TABLE IF NOT EXISTS estudiantes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  carrera VARCHAR(50) NOT NULL,
  nombres VARCHAR(100) NOT NULL,
  dni VARCHAR(20) NOT NULL,
  fecha_nacimiento DATE NOT NULL,
  correo VARCHAR(100) NOT NULL,
  contrasena VARCHAR(255) NOT NULL
);
