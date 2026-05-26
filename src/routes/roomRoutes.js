import express from 'express'

import {
    createRoom,
    getRooms,
    getRoomByHotel,
    updateRoom,
    deleteRoom
} from '../controllers/roomController.js'

const router = express.Router()

router.get('/hotel/:hotelId', getRoomByHotel)
router.put('/:id', updateRoom)
router.delete('/:id', deleteRoom)
router.post('/', createRoom)
router.get('/', getRooms)

export default router