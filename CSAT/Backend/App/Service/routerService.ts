import {Shared} from './serviceSetting'

/* Router Import */
import * as statusRouter from '../Router/Status/statusRouter'
import * as eventRouter from '../Router/Event/eventRouter'

export function Router(app) {
    let api_url: string = Shared.API_URL

    app.use(api_url + 'status', statusRouter)
    app.use(api_url + 'event', eventRouter)
}
