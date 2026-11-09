import { sessionsService } from '../services/sessions.service.js';

export const sessionCheck = async (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Modulo de sesiones inicializado"
    });
};

    export const sessionRegister = async (req, res) => {
  try {
    const newUser = await sessionsService.registerUser(req.body);
    return res.status(201).json({
      status: 'success',
      payload: newUser
    });
  } catch (error) {
    const statusCode = error.statusCode || 500;
    return res.status(statusCode).json({
      status: 'error',
      message: error.message || 'Error interno del servidor'
    });
  }
};``