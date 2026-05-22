import express from 'express'

import publicRoutes from './routes/publicRoutes.js'
import userRoutes from './routes/userRoutes.js'
import roomRoutes from './routes/roomRoutes.js'
import reservationRoutes from './routes/reservationRoutes.js'
import hotelRoutes from './routes/hotelRoutes.js'

const app = express()

app.use(express.json())

app.use('/', publicRoutes)
app.use('/users', userRoutes)
app.use('/rooms', roomRoutes)
app.use('/reservations', reservationRoutes)
app.use('/hotels', hotelRoutes)

export default app