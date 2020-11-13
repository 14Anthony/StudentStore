<<<<<<< HEAD:backend/server.js
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const products = require("./DB/products");
const userRoutes = require("./routes/userRoutes.js");
const productRoutes = require("./routes/productRoutes.js");
const { notFound, errorHandler } = require("./middleware/errorMid.js");
=======
const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./backend/config/db')
const products = require('./backend/DB/products')
const userRoutes = require('./backend/routes/userRoutes.js') 
const productRoutes = require('./backend/routes/productRoutes.js')
const { notFound, errorHandler } = require('./backend/middleware/errorMid.js')
>>>>>>> 51af92a74c6d5bfecc7d9b9acbee6d50b183b061:server.js
const cors = require("cors");
// import express from "express";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";
// import products from './DB/products.js'
// import productRoutes from "./routes/productRoutes.js";
// import userRoutes from "./routes/userRoutes.js";
// import cors from '
// import { notFound, errorHandler } from "./middleware/errorMid.js";

const path = require('path');
dotenv.config();
connectDB();

const app = express();
app.use(express.static(path.join(__dirname, 'shopside/build')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Backend Begins...");
});

app.use(cors());
app.use("/api/products", productRoutes);
app.use(userRoutes);
// app.use(notFound);
// app.use(errorHandler);

//const PORT = process.env.PORT || 8800;

const PORT = process.env.PORT || 8800;
app.listen(PORT);
