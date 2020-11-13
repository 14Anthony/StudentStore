// import express from 'express'
// import asyncHandler from 'express-async-handler'
// import Product from '../models/productModel.js'
const productController = require("../../controllers/productController.js");
const express = require("express");
const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel.js"),
  router = express.Router(),
  multer = require("multer");
  // uuidv4 = require("uuid/v5");

const DIR = "./public/";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now()) 
  },
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});
// the is going to grab all of the students
// this will be the GET to /api/products
// this is access for a public routes
router
  .route("/")
  .get(
    asyncHandler(async (req, res, next) => {
      const products = await Product.find({});
      res.json(products);
    })
  )
  //Create a product
  .post(productController.create);

// the is going to grab single student
//  GET to /api/products/:id
// this is access for a public routes
router
  .route("/:id")
  .get(
    asyncHandler(async (req, res, next) => {
      const product = await Product.findById(req.params.id);
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ message: "product not found" });
      }
    })
  )
  //Update a product
  .put(productController.update)
  //Delete a product
  .delete(productController.remove);

// export default router
module.exports = router;
