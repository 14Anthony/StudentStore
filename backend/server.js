const express = require('express');
const products = require('./DB/products')

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

app.listen(8800)