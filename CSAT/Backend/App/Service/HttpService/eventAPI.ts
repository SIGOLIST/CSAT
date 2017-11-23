import {EventModel} from '../../Model/eventModel'

let Event = EventModel.event

export module EventAPI {

    export async function list() {
        return Event.find()
    }

    export async function create(event: any) {
        let createSchema: any = new Event(event)
        return createSchema.save()
    }

    /*
        TEST REQUEST
    */
    export function createTest() {
        let testSchema = new Event({title: "테스트 이벤트2", item: "테스트 상품", description: "테스트 상품 설명", location: { city: "서울시", district: "강북구" }, url: "http://www.naver.com"})
        return new Event({title: "테스트 이벤트2", item: "테스트 상품", description: "테스트 상품 설명", location: { city: "서울시", district: "강북구" }, url: "http://www.naver.com"}).save((err, data) => {
            if (err) {
                console.log("not save")
            } else {
                console.log(data)
            }
        })
    }

}
