import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = 3000

//endpoint
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Aplikasi berjalan di port ${port}`)
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