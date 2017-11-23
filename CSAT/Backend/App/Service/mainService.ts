import * as express from 'express'
import * as cors from 'cors'
import * as logger from 'morgan'
import * as cookieParser from 'cookie-parser'
import * as bodyParser from 'body-parser'
import * as mongoose from 'mongoose'
import * as session from 'express-session'
// import * as increment from 'mongoose-auto-increment'

/* Import Louter */
import {Router} from './routerService'

/* Import errorHandler */
import {errorHandler} from './ErrorService'

export class Server {
    public app: express.Application

    constructor() {
        this.app = express()
        this.app.use(cors())
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.use(cookieParser())
        this.app.use(logger('dev'))
        this.connectMongo()
        Router(this.app)

        this.app.use((req: express.Request, res: express.Response, next: Function) => {
            let err: any = new Error('Not Found')
            err.status = 404
            next(err)
        })

        this.app.use(errorHandler)
    }

    private connectMongo() {
        let connect = () => mongoose.createConnection().openUri(process.env.MONGO_URL)
        mongoose.Promise = global.Promise
        mongoose.connection.on('disconnected', connect)
        mongoose.connection.on('error', err => {
            console.log('Mongo Error : ' + err)
        })

        connect()
    }
}
