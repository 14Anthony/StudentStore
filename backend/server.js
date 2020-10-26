const express = require('express');
const products = require('./DB/products')

const app = express()

app.get('/', (req, res, next) => {
    res.send('Backend Begins...')
})

app.get('/api/products', (req, res, next) => {
    res.json(products)
})

app.listen(8800)