require("dotenv").config(); // Carga variables de entorno
const express = require("express");
const cors = require("cors");
const errorHandler = require("./src/middlewares/errorHandler.middleware");
const authRoutes = require("./src/routes/auth.route");
const userRoutes = require("./src/routes/user.route");
const logger = require("./src/config/logger");


// Inicializar la aplicación
const app = express();

// Middleware global
app.use(express.json());
app.use(cors());

// Registrar rutas
app.use("/login", authRoutes);
app.use("/users", userRoutes);

// Middleware de manejo de errores centralizado
app.use(errorHandler);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
