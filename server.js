const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./backend/config/db");
const products = require("./backend/DB/products");
const userRoutes = require("./backend/routes/userRoutes.js");
const productRoutes = require("./backend/routes/productRoutes.js");
const { notFound, errorHandler } = require("./backend/middleware/errorMid.js");
const cors = require("cors");
var bodyParser = require("body-parser");
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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'shopside/build')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("Backend Begins...");
// });

app.use(cors());
app.use("/api/products", productRoutes);
app.use(userRoutes);
// app.use(notFound);
// app.use(errorHandler);

//const PORT = process.env.PORT || 8800;

const PORT = process.env.PORT || 3001;
app.listen(PORT);


// scripts": {
//   "start": "node server",
//   "server": "nodemon server",
//   "build": "react-scripts build",
//   "test": "react-scripts test",
//   "eject": "react-scripts eject",
//   "data:import": "node backend/seeder",
//   "data:destroy": "node backend/seeder -d",
//   "client-install": "npm install --prefix shopside", 
//   "shopside": "cd shopside && npm run start",   
//   "start:dev": "concurrently \"nodemon --ignore 'shopside/*'\" \"npm run shopside\""

// },
