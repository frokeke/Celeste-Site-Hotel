import express from 'express'
import {
    createReservation,
    getReservationByUser,
    updateReservation,
    deleteReservation
} from '../controllers/reservationController.js'
import{
    authMiddleware
} from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/', authMiddleware, createReservation)
router.put('/:id', updateReservation)
router.delete('/:id', deleteReservation)
router.get('/my-reservations', authMiddleware, getReservationByUser)

export default router