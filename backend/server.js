const  express = require('express')
const dotenv = require('dotenv')
const products = require('./DB/products.js')


dotenv.config()

// connectDB()

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