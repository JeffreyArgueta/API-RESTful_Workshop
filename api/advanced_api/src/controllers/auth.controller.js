const authService = require("../services/auth.service");

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: "Email y contraseña son obligatorios" });

    const result = await authService.login({ email, password });
    if (result.error) return res.status(401).json(result);

    res.json(result);
  } catch (err) {
    next(err)
  }
};

module.exports = { login };
