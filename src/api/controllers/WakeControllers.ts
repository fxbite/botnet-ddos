import {Request, Response, NextFunction} from 'express'

class ControlControllers {

    // [GET] /wake/keep-waiting
    preventSleep(req: Request, res: Response, next: NextFunction) {
        console.log('...Pending 😴')
        res.status(200).send('OK! Waiting for commander')
    }
}

export default new ControlControllers