import { model, Schema, createConnection } from 'mongoose'
import * as increment from 'mongoose-auto-increment'

// let connection = createConnection(process.env.MONGO_URL)
// increment.initialize(connection)

// export interface EventObject extends Document {
//     event_id?: number,
//     title?: string,
//     item?: string,
//     description?: string,
//     location?: { city: string, district: string },
//     url?: string,
//     date?: { start: string, end: string }
// }

let connection = createConnection().openUri(process.env.MONGO_URL)
increment.initialize(connection)

export module EventModel {
    /**
        event_id    => Unique number
        title       => 행사 이름
        item        => 상품 정보
        description => 행사 부가 설명
        location    => 행사 지역
        url         => 행사 링크
        date        => 행사 기간
    */
    let eventSchema: Schema = new Schema ({
        event_id: Number,
        title: {type: String, default: ''},
        item: {type: String, default: ''},
        description: {type: String, default: ''},
        location: { city: {type: String, default: ''}, district: {type: String, default: ''} },
        url: {type: String, default: ''},
        date: { start: {type: Date, default: Date.now}, end: {type: Date, default: Date.now} }
    })

    eventSchema.plugin(increment.plugin, 'event_id')

    export let event = model('Event', eventSchema)
}
