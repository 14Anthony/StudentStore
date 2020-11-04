// import express from 'express'
// import asyncHandler from 'express-async-handler'
// import Product from '../models/productModel.js'

const express = require('express');
const asyncHandler = require('express-async-handler');
// const Product = require('../models/productModel.js')

const router = express.Router()
// the is going to grab all of the students
// this will be the GET to /api/products
// this is access for a public routes


router.post('/api/addusers', (req, res) => {
   console.log('from server req =' , req);
    
})
// the is going to grab single student
//  GET to /api/products/:id
// this is access for a public routes


// export default router
module.exports = router;