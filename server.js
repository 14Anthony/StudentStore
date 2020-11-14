const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./backend/config/db");
const products = require("./backend/DB/products");
const userRoutes = require("./backend/routes/userRoutes.js");
const productRoutes = require("./backend/routes/productRoutes.js");
const { notFound, errorHandler } = require("./backend/middleware/errorMid.js");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const path = require('path');
const mongoose = require("mongoose");
dotenv.config();


const app = express();
app.use(express.static(path.join(__dirname, 'shopside/build')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("shopside/build"));
  }
  // Add routes, both API and view
  
  app.use(cors());
  app.use("/api/products", productRoutes);
  app.use(userRoutes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/products");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});



