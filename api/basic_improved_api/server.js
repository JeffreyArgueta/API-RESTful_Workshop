const express = require("express");
const app = express();
const { Sequelize, DataTypes } = require("sequelize");

// Conectar a MySQL
const sequelize = new Sequelize("prueba_api", "root", "admin", {
  host: "localhost",
  dialect: "mysql",
  logging: console.log,
  pool: {
    max: 10, // Máximo de conexiones simultáneas
    min: 2,
    acquire: 30000,
    idle: 10000
  }
});

sequelize.authenticate()
  .then(() => console.log("✅ Connected to MySQL successfully"))
  .catch(err => console.error("❌ Connection error:", err));

// Definir el modelo de usuario
const User = sequelize.define("User", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING(255), allowNull: false }
}, {
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
  tableName: "users"
});

// Middleware para leer JSON
app.use(express.json());

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error("❌ Error:", err.message);

  res.status(err.status || 500).json({
    error: err.message || "Error interno del servidor"
  });
});

// Obtener todos los usuarios
app.get("/users", async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const users = await User.findAll({
      limit: Number(limit),
      offset: (Number(page) - 1) * Number(limit),
      attributes: ["id", "name", "email"]
    });
    res.json(users);
  } catch (err) {
    next(err); // Envía el error al middleware centralizado
  }
});

// Crear un usuario
app.post("/users", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ error: "Nombre, email y contraseña son obligatorios" });

    const user = await User.create({ name, email, password });
    res.json(user);
  } catch (err) {
    next(err);
  }
});

// Actualizar usuario
app.put("/users/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.update(req.body);
      res.json(user);
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (err) {
    next(err);
  }
});

// Eliminar usuario
app.delete("/users/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      res.json({ message: "Usuario eliminado" });
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (err) {
    next(err);
  }
});

// Iniciar el servidor
app.listen(3000, async () => {
  console.log("🚀 Servidor corriendo en http://localhost:3000");
});
