const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const verifyToken = require("../middlewares/auth.middleware");
const { getUsers, createUser, updateUser, deleteUser } = require("../controllers/user.controller");

router.get("/", verifyToken, getUsers);
router.post("/",
  [
    body("name").notEmpty().withMessage("El nombre es obligatorio"),
    body("email").isEmail().withMessage("Debe ser un email válido"),
    body("password").isLength({ min: 6 }).withMessage("La contraseña debe tener al menos 6 caracteres")
  ], createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
