import jwt from 'jsonwebtoken'



export function authMiddleware(req, res, next) {

    try {
        const authHeader = req.headers.authorization

        if(!authHeader) {
            return res.status(401).json({
                message: 'Token não enviado'
            })
        }
        const token = authHeader.split(' ')[1]

        const decoded = jwt.verify(token,'secretKey')

        req.userId = decoded.id
        
        next()

    } catch(error) {
        return res.status(401).json({ message: 'Token inválido' })
    }
}