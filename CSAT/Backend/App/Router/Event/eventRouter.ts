import {Router} from 'express'
import {wrap} from '../../Service/ErrorService'

import {EventAPI} from '../../Service/HttpService/eventAPI'

let router: Router = Router()

router.get('/', wrap(async (req, res) => {
    let list = await EventAPI.list()
    res.json(list)
}))

router.post('/', wrap(async (req, res) => {
    let params: any = {
        title: req.body.title,
        item: req.body.item,
        description: req.body.description,
        location: { city: req.body.city, district: req.body.district },
        url: req.body.url,
        date: { start: req.body.start, end: req.body.end }
    }
    let create = EventAPI.create(params)
    res.json(create)
}))

/*
    TEST ROUTER
*/
router.post('/test', wrap(async (req, res) => {

    let create = EventAPI.createTest()
    res.json(create)
}))

export = router
