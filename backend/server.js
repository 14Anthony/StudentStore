import express from 'express'
import dotenv from 'dotenv'
import products from './DB/products.js'

dotenv.config()

const app = express()

app.get('/', (req, res, next) => {
    res.send('Backend Begins...')
})

app.get('/api/products', (req, res, next) => {
    res.json(products)
})
app.get('/api/products/:id', (req, res, next) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})

const PORT = process.env.PORT || 8800

app.listen(8800)