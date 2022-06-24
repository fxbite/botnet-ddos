import express from 'express'
import controlControllers from '../controllers/ControlControllers'
import { checkPingTargetWebsite } from '../middleware/checkPing' 

const router = express.Router()

router.post('/attack', checkPingTargetWebsite, controlControllers.attack)
router.get('/', controlControllers.index)

export default router