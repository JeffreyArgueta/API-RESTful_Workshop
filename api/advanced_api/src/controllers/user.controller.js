require("dotenv").config();
const logger = require("../config/logger");
const { validationResult } = require("express-validator");
const userService = require("../services/user.service");

const getUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

const createUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const user = await userService.createUser(req.body);
    res.json(user);
  } catch (err) {
    logger.error(`Error al crear usuario: ${err.message}`);
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const user = await userService.updateUser();
    if (!user) return res.status(404).json({ error: "Usuario no encontrado" })
    res.json(user);
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const result = await userService.deleteUser(req.params.id);
    if (!result) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = { getUsers, createUser, updateUser, deleteUser };
