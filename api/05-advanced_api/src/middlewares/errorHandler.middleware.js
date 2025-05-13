const logger = require("../config/logger");

const errorHandler = (err, req, res, next) => {
  logger.error(`❌ Error en la API: ${err.message}`);
  res.status(err.status || 500).json({ error: err.message || "Error interno del servidor" });
};

module.exports = errorHandler;
