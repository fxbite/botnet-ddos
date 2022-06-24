import express from 'express'
import wakeControllers from '../controllers/WakeControllers'

const router = express.Router()

router.get('/keep-waiting', wakeControllers.preventSleep)

export default router