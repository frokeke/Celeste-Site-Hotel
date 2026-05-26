import {
    createReservationService,
    getReservationsByUserService,
    updateReservationService,
    deleteReservationService
} from '../services/reservationService.js'

export async function createReservation(req, res) {
    const reservation = await createReservationService(req.body)
    res.status(200).json(reservation)
}

export async function getReservationByUser(req, res) {
    try {
        const reservations = await getReservationsByUserService(req.userId)
        res.json(reservations)
    } catch(error) {
        console.error(error)
        res.status(500).json({message: 'Erro ao obter reservas do usuário'})
    }
}

export async function updateReservation(req, res){
    const reservation = await updateReservationService(req.params.id, req.body)
    res.status(202).json(reservation)
}

export async function deleteReservation(req, res){
    const reservation = await deleteReservationService(req.params.id)
    res.status(203).json(reservation)
}
