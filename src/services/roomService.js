import prisma from '../database/prisma.js'

export async function createRoomService(data) {
    return await prisma.room.create({
        data: {
            number: data.number,
            type: data.type,
            capacity: data.capacity,
            priceDay: data.priceDay,
            isOccupied: data.isOccupied
        }
    })
}
export async function getRoomsService() {
    return await prisma.room.findMany()
}

export async function getRoomByHotelService(hotelId) {
    return await prisma.room.findMany({
        where: {
            hotelId: hotelId
        }
    })
}

export async function updateRoomService(id, data) {
    return await prisma.room.update({
        where: {
            number: number
        },
        data: {
            capacity: data.capacity,
            type: data.type,
            priceDay: data.priceDay,
            isOccupied: data.isOccupied
        }
    })
}

export async function deleteRoomService(id) {
    return await prisma.room.delete({
        where: {
            number: id
        }
    })   
}