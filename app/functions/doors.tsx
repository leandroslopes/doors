import DoorModel from "../model/door";

export function createDoors(count: number, doorWithGift: number): DoorModel[] {

    return Array.from( { length: count }, (_, i) => {

        const number = i + 1
        const hasGift = number === doorWithGift

        return new DoorModel(number, hasGift)
    })
}

export function updateDoors(doors: DoorModel[], doorModified: DoorModel): DoorModel[] {

    return doors.map(doorCurrent => {
        
        const equalModified = doorCurrent.number === doorModified.number

        if (equalModified)
            return doorModified
        else
            return doorModified.open ? doorCurrent : doorCurrent.desselecionar()
    })
}