import jwt from "jsonwebtoken"

import users from "../../models/auth/users.js"
import asyncHandlers from "../../middlewares/asyncHandlers.js"

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
        data: user
    })
}

export const registerUser = asyncHandlers(async (req, res) => {

    //condition to determine if the document / data is still empty, then the admin role. if it already exists then the user role
    const isFirstAccount = (await users.countDocuments()) === 0

    const role = isFirstAccount ? "admin" : "user"

    const createUsers = await users.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role,
    })

    createSendToken(createUsers, 201, res)
})

export const loginUser = asyncHandlers(async (req, res) => {
    //validate for email & password cant be empty
    if (!req.body.email && !req.body.password) {
        res.status(400)
        throw new Error('Email and Password cannot be empty')
    }

    //Validate whether the email is registered or not in DB
    const userData = await users.findOne({
        email: req.body.email
    })

    if (userData && (await userData.comparePassword(req.body.password))) {
        createSendToken(userData, 200, res)
    } else {
        throw new Error('Unregistered user')
    }
})

export const logoutUser = (req, res) => {
    res.cookie('jwt', '', {
        expire: new Date(0),
        httpOnly: true,
        security: false,
    })

    res.status(200).json({
        message: "Successfully logged out"
    })
}

export const getUser = async (req, res) => {
    const data = await users.findById(req.username.id).select({ password: 0 })

    if (data) {
        return res.status(200).json({
            data
        })
    }

    return response.status(400).json({
        messages: "User not found"
    })
}