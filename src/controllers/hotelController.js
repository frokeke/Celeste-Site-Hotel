import{
    createHotelService,
    getHotelService,
    getHotelByIdService,
    updateHotelService,
    deleteHotelService
} from '../services/hotelService.js'

export async function createHotel(req, res) {
    const hotel = await createHotelService(req.body)
    res.status(200).json(hotel)
}
export async function getHotels(req, res) {
    const hotels = await getHotelService()
    res.status(201).json(hotels)
}
export async function getHotelById(req, res) {
    const hotel = await getHotelByIdService(req.params.id)
    res.status(202).json(hotel)
}
export async function updateHotel(req, res) {
    const hotel = await updateHotelService(req.params.id, req.body)
    res.status(203).json(hotel)
}
export async function deleteHotel(req, res) {
    const hotel = await deleteHotelService(req.params.id)
    res.status(204).json(hotel)
}