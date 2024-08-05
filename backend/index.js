import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

import router from "./router/index.js"

dotenv.config()

const app = express()
const port = 3000

//middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//endpoint
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//router
app.use('/api', router);

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})

//connection database
async function main() {
    try {
        await mongoose.connect(process.env.DATABASE);
        console.log('Database connected');
    } catch (error) {
        console.log('Failed to connect to the database:', error)
    }
}

main()