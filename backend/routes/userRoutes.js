// import express from 'express'
// import asyncHandler from 'express-async-handler'
// import Product from '../models/productModel.js'

const express = require('express');
const router = express.Router()
const db = require('../../controllers/userControllers.js')
// const asyncHandler = require('express-async-handler');
// const Product = require('../models/productModel.js')

// the is going to grab all of the students
// this will be the GET to /api/products
// this is access for a public routes


router.post('/api/addusers', (req, res) => {
    //mongoose in to add the user
   console.log('from server req =' , req.body);
   db.create(req.body);
   res.send(req.body);
});

router.get('/api/checkUser', function(req, res) {
    //mongoose into db for all user
    res.send(
        db.findAll(req, res)
        );

});
// the is going to grab single student
//  GET to /api/products/:id
// this is access for a public routes


// export default router
module.exports = router;