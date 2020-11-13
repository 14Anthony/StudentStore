// import express from 'express'
// import asyncHandler from 'express-async-handler'
// import Product from '../models/productModel.js'
const productController = require("../../controllers/productController.js");
const express = require("express");
const asyncHandler = require("express-async-handler");
<<<<<<< HEAD
const Product = require("../models/productModel.js");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const upload = multer({ storage: storage });
=======
const Product = require("../models/productModel.js"),
  router = express.Router(),
  multer = require("multer");
  // uuidv4 = require("uuid/v5");
>>>>>>> 1cf12251d3b62eea3acde1c9f832ed58e828284a

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
<<<<<<< HEAD
  .post(productController.create)
=======
  .post(upload.single("productImg"), (req, res, next) => {
    console.log(req.file);
    const url = req.protocol + "://" + req.get("host");
    const user = new Product({
      name: req.body.name,
      image: url + "/public/" + req.file.filename,
    });
    user
      .save()
      .then((result) => {
        res.status(201).json({
          message: "Product added successfully!",
          userCreated: {
            _id: result._id,
            profileImg: result.profileImg,
          },
        });
      })
      .catch((err) => {
        console.log(err),
          res.status(500).json({
            error: err,
          });
      });
  });
>>>>>>> 1cf12251d3b62eea3acde1c9f832ed58e828284a

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
