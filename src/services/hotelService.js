import prisma from '../database/prisma.js'

export async function createHotelService(data){
    return await prisma.hotel.create({
        data: {
            name: data.name,
            description: data.description,
            city: data.city,
            state: data.state,
            address: data.address,
            ownerEmail: data.ownerEmail
        }
    })
}
export async function getHotelService(){
    return await prisma.hotel.findMany({
        include: {
            rooms: true 
        }
    })
}
export async function getHotelByIdService(id){
    return await prisma.hotel.findUnique({
        where: {
            id: id
        },
        include: {
            rooms: true 
        }
    })
}
export async function updateHotelService(id, data){
    return await prisma.hotel.update({
        where: {
            id: id
        },
        data: {
            name: data.name,
            description: data.description,
            image: data.image,
            city: data.city,
            state: data.state,
            address: data.address
        }
    })
}
export async function deleteHotelService(id){
    return await prisma.hotel.delete({
        where: {
            id: id
        }
    })
}