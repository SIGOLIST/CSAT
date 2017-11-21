import {Shared} from './serviceSetting'

/* Router Import */
import * as statusRouter from '../Router/Status/statusRouter'

export function Router(app) {
    let api_url = Shared.API_URL
    app.use(api_url + 'status', statusRouter)
}
