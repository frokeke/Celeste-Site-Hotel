import express from 'express'

import {
    getUsers,
    updateUser,
    deleteUser,
    loginUser
} from '../controllers/userController.js'

const router = express.Router()

router.get('/', getUsers)

router.put('/:id', updateUser)

router.delete('/:id', deleteUser)

router.post('/login', loginUser)

export default router