import { sessionCheck } from '../controllers/sessions.controller.js'
import express from 'express'
export const sessionsRouter = express.Router()

sessionsRouter.get('/sessions', sessionCheck)