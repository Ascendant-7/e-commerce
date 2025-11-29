import express from 'express'
import cors from 'cors'
import categories from './data/categories.json'
import promotions from './data/promotions.json'

// app and port initialization - using express
const app = express()
const PORT = 3000

// enable json responses
app.use(express.json())
app.use(cors())

// routes
app.get('/api/categories', (req, res) => res.json(categories))
app.get('/api/promotions', (req, res) => res.json(promotions))

// listen to port
app.listen(PORT, () => console.log(`Backend running on https://localhost:${PORT}`))
