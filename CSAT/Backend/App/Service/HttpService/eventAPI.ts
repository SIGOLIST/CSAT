import {EventObject, EventModel} from '../../Model/eventModel'

let Event: any = EventModel.event

export module EventAPI {

    export async function list() {
        return Event.find().sort({event_id: 1})
    }

    export async function create(event: EventObject) {
        let createSchema: any = new Event(event)
        return createSchema.save()
    }
}
