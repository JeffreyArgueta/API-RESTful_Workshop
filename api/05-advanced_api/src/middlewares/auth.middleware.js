require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) return res.status(403).json({ error: "Token requerido" });

  jwt.verify(token.split(" ")[1], process.env.SECRET_KEY, (err, decoded) => {
    if (err) return res.status(401).json({ error: "Token inválido" });

    req.user = decoded; // Almacenar datos del usuario autenticado
    next();
  });
};

module.exports = verifyToken;
