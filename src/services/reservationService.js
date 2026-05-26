import prisma from '../database/prisma.js'

export async function createReservationService(data) {

    const room = await prisma.room.findUnique({
        where: {
            id: data.roomId
        }
    })
    if(!room) {
        throw new Error('Quarto não encontrado ou não existe')
    }
    const roomReserved = await prisma.reservation.findFirst({
        where: {
            roomId: data.roomId,
            status: 'RESERVED',
            OR: [{
                checkIn: {
                    lte: new Date(data.checkOut)
                },
                checkOut: {
                    gte: new Date(data.checkIn)
                }
            }]
        }    
    })
    if(roomReserved) {
        throw new Error('Quarto já reservado para as datas selecionadas')
    }

    const millTime = Math.abs(new Date(data.checkOut) - new Date(data.checkIn))
    const Days = Math.ceil(millTime / (1000 * 60 * 60 * 24))
    const price = Days * room.priceDay

    return await prisma.reservation.create({
        data: {
            userId: data.userId,
            roomId: data.roomId,
            checkIn: new Date(data.checkIn),
            checkOut: new Date(data.checkOut),
            price: price,
            status: 'Reservado'
        }
    })
}

export async function getReservationsByUserService(userId) {
    return await prisma.reservation.findMany({
        where: {
            userId
            },
        include: {
            room: {
                include: {
                    hotel: true
                }
            }
        }
    })
}
export async function updateReservationService(id, data) {
    return await prisma.reservation.update({
        where: {
            id: id
        },
        data: {
            price: data.price,
            status: data.status
        }
    })
}
export async function deleteReservationService(id){
    return await prisma.reservation.delete({
        where:{
            id: id
        }
    })
}