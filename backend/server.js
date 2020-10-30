import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
// import products from './DB/products.js'

import productRoutes from './routes/productRoutes.js'


dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res, next) => {
    res.send('Backend Begins...')
})

app.use('/api/products', productRoutes)


const PORT = process.env.PORT || 8800

app.listen(8800)