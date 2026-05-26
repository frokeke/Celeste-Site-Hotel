import {
    createRoomService,
    getRoomsService,
    getRoomByHotelService,
    updateRoomService,
    deleteRoomService
} from '../services/roomService.js'

export async function createRoom(req, res) {

    const room = await createRoomService(req.body)

    res.status(200).json(room)
}

export async function getRooms(req, res) {

    const rooms = await getRoomsService()

    res.status(201).json(rooms)
}

export async function getRoomByHotel(req, res) {

    const rooms = await getRoomByHotelService(req.params.hotelId)
    res.status(201).json(rooms)
}

export async function updateRoom(req, res) {

    const room = await updateRoomService(
        req.params.id,
        req.body
    )

    res.status(202).json(room)
}

export async function deleteRoom(req, res) {

    await deleteRoomService(req.params.id)

    res.status(203).json({
        message: 'Quarto deletado'
    })
}