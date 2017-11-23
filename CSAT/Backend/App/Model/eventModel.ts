import { Model, Document, model, Schema, createConnection } from 'mongoose'
import * as increment from 'mongoose-auto-increment'

// let connection = createConnection(process.env.MONGO_URL)
// increment.initialize(connection)

export interface EventObject extends Document {
    title?: string,
    item?: string,
    description?: string,
    location?: { city: string, district: string },
    url?: string,
    date?: { start: string, end: string }
}

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
        title: String,
        item: { name: String, price: Number },
        description: String,
        location: { city: String, district: String },
        url: String,
        date: { start: Date, end: Date }
    })

    // eventSchema.plugin(increment.plugin, 'event_id')

    export let event: Model<EventObject> = model<EventObject>('event', eventSchema)
}
