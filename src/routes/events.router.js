import { eventCheck } from '../controllers/events.controller.js'
import express from 'express'
export const eventsRouter = express.Router()

eventsRouter.get('/events', eventCheck)