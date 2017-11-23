import {Server} from './Service/mainService'
import * as dotenv from 'dotenv'

dotenv.config({
    silent: true,
    path: '.env'
})

import * as express from 'express'

let port: number = 3000

let app: any = new Server().app

app.set('port',port)
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${port}`)
}).on('error', err => {
    console.log(`Error Message : ${err}`)
})
