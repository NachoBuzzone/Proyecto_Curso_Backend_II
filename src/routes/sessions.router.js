import { sessionCheck, sessionRegister } from '../controllers/sessions.controller.js'
import express from 'express'
import { validateRegister } from '../middlewares/validateRegister.middleware.js';

export const sessionsRouter = express.Router()

sessionsRouter.get('/', sessionCheck)
sessionsRouter.post('/register', validateRegister, sessionRegister)