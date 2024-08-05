import users from "../../models/auth/users.js"

export const registerUser = async (req, res) => {
    try {
        const createUsers = await users.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })

        return res.status(201).json({
            messages: "Registered Successfully",
            data: createUsers
        })
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