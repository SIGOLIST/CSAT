import * as express from 'express'

/* Import Louter */
import {Router} from './routerService'

/* Import errorHandler */
import {errorHandler} from './ErrorService'

export class Server {
    public app: express.Application

    constructor() {
        this.app = express()

        Router(this.app)

        this.app.use((req: express.Request, res: express.Response, next: Function) => {
            let err: any = new Error('Not Found')
            err.status = 404
            next(err)
        })

        this.app.use(errorHandler)
    }

}
