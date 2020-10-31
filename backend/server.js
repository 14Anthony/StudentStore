import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
// import products from './DB/products.js'
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMid.js";

dotenv.config();

connectDB();

const app = express();


app.get("/", (req, res, next) => {
    res.send("Backend Begins...");
});


app.use("/api/products", productRoutes);


app.use(notFound);


app.use(errorHandler);



const PORT = process.env.PORT || 8800;
