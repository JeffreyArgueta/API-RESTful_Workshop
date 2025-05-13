const bcrypt = require("bcryptjs");
const logger = require("../config/logger");
const User = require("../models/user.model");

// Obtener todos los usuarios
const getAllUsers = async () => {
  return await User.findAll({ attributes: ["id", "name", "email"] });
};

// Crear usuario
const createUser = async ({ name, email, password }) => {
  const hashedPassword = bcrypt.hashSync(password, 10);
  const user = await User.create({ name, email, password: hashedPassword });

  logger.info(`Usuario creado: ${user.email}`);
  return user;
};

// Actualizar usuario
const updateUser = async (id, userData) => {
  const user = await User.findByPk(id);
  if (!user) return null;

  await user.update(userData);
  return user;
};

// Eliminar usuario
const deleteUser = async (id) => {
  const user = await User.findByPk(id);
  if (!user) return null;

  await user.destroy();
  return { message: "Usuario eliminado" };
};

module.exports = { getAllUsers, createUser, updateUser, deleteUser };
