import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

const router = express.Router()
// the is going to grab all of the students
// this will be the GET to /api/products
// this is access for a public routes


router.get('/', asyncHandler(async (req, res, next) => {
    const products = await Product.find({})

    res.json(products)
}))
// the is going to grab single student
//  GET to /api/products/:id
// this is access for a public routes



router.get('/:id', asyncHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.id)

    if (product) {

        res.json(product)

    } else {

        res.status(404).json({ message: 'product not found' })
    }
}))

export default router