const express = require('express');
const products = require('./DB/products')

const app = express()

app.get('/', (req, res, next) => {
    res.send('Backend Begins...')
})

app.get('/', (req, res, next) => {

})

app.listen(8800)