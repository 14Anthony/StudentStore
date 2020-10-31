import express from 'express'
import dotenv from 'dotenv'
import products from './DB/products.js'


dotenv.config()

// connectDB()

const app = express()



app.get('/', (req, res, next) => {
    res.send('Backend Begins...')
})

app.use('/api/products', productRoutes)

app.use()

app.use()


const PORT = process.env.PORT || 8800

app.listen(8800)