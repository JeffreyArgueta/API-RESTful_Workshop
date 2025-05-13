const express = require("express");
const app = express();
const { Sequelize, DataTypes } = require("sequelize");

// Conectar a MySQL
const sequelize = new Sequelize("prueba_api", "root", "admin", {
  host: "localhost",
  dialect: "mysql",
  logging: console.log
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

// Obtener todos los usuarios
app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// Crear un usuario
app.post("/users", async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

// Actualizar usuario
app.put("/users/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    await user.update(req.body);
    res.json(user);
  } else {
    res.status(404).json({ error: "Usuario no encontrado" });
  }
});

// Eliminar usuario
app.delete("/users/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    await user.destroy();
    res.json({ message: "Usuario eliminado" });
  } else {
    res.status(404).json({ error: "Usuario no encontrado" });
  }
});

// Iniciar el servidor
app.listen(3000, async () => {
  console.log("🚀 Servidor corriendo en http://localhost:3000");
});
