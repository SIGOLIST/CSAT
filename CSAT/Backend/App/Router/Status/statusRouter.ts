import {Router} from 'express'
import {wrap} from '../../Service/ErrorService'

let router: Router = Router()

router.get('/', wrap(async (req, res) => {
    res.status(200).json({'status': 'online'})
}))

export = router
