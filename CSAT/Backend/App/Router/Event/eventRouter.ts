import {Router} from 'express'
import {wrap} from '../../Service/ErrorService'
import {EventObject} from '../../Model/eventModel'

import {EventAPI} from '../../Service/HttpService/eventAPI'

let router: Router = Router()

router.get('/', wrap(async (req, res) => {
    let list = await EventAPI.list()
    res.json(list)
}))

router.post('/', wrap(async (req, res) => {
    let params: EventObject = req.body
    let create = EventAPI.create(params)
    res.json(create)
}))

export = router
