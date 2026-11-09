export const validateRegister = (req, res, next) => {
  const { first_name, last_name, email, password } = req.body;

  if (!first_name || !last_name || !email || !password) {
    return res.status(400).json({
      status: 'error',
      message: 'Faltan campos obligatorios (first_name, last_name, email, password)'
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return res.status(400).json({
      status: 'error',
      message: 'El formato del email es inválido'
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      status: 'error',
      message: 'La contraseña debe tener al menos 6 caracteres'
    });
  }

  next();
};
