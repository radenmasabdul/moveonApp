import jwt from "jsonwebtoken"
import users from "../../models/auth/users.js"

export const authMiddlewares = async (req, res, next) => {
    let token;
    token = req.cookies.jwt

    if (!token) {
        return next(
            res.status(401).json({
                message: "You cannot access this page"
            })
        )
    }

    let decoded;

    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
        return next(
            res.status(401).json({
                message: "Incorrect token used"
            })
        )
    }

    const currenctUser = await users.findById(decoded.id)

    if (!currenctUser) {
        return next(
            res.status(401).json({
                message: "User not found"
            })
        )
    }

    req.username = currenctUser

    next()
}