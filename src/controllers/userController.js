import jwt from 'jsonwebtoken'
import {
    createUserService,
    getUsersService,
    loginUserService,
    updateUserService,
    deleteUserService
} from '../services/userService.js'

export async function createUser(req, res) {

    const user = await createUserService(req.body)

    res.status(200).json(user)
}

export async function loginUser(req, res){
    try{
        const user = await loginUserService(req.body)

        if(!user) {
            return res.status(404).json({message: 'Usuário nao encontrado'})
        }
        if(user.password !== req.body.password) {
            return res.status(401).json({message:'Senha Inválida'})
        }
        const token = jwt.sign({
            id: user.id,
            email: user.email
        }, 'secretKey')
        res.json({token, user})
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'Erro no login'})
    }
}

export async function getUsers(req, res) {

    const users = await getUsersService()

    res.status(201).json(users)
}

export async function updateUser(req, res) {

    const user = await updateUserService(
        req.params.id,
        req.body
    )

    res.status(202).json(user)
}

export async function deleteUser(req, res) {

    await deleteUserService(req.params.id)

    res.status(203).json({
        message: 'User deletado'
    })
}