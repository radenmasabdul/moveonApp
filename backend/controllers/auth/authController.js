import users from "../../models/auth/users.js"
import jwt from "jsonwebtoken"

const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '6d'
    })
}

const createSendToken = (user, statusCode, res) => {
    const token = signToken(user.id)

    const cookieOption = {
        expire: new Date(
            Date.now() + 6 * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
        security: false,
    }

    res.cookie('jwt', token, cookieOption)

    user.password = undefined

    res.status(statusCode).json({
        messages: "Registered Successfully",
        data: user
    })
}

export const registerUser = async (req, res) => {
    try {
        const createUsers = await users.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })

        createSendToken(createUsers, 201, res)

    } catch (error) {
        return res.status(400).json({
            messages: "Error",
            error
        })
    }
}

export const loginUser = (req, res) => {
    res.send('Login successful')
}

export const logoutUser = (req, res) => {
    res.send('Successfully logged out')
}

export const getUser = (req, res) => {
    res.send('Successfully get user')
}