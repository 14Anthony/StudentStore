import mongoose from 'mongoose'
import dotenv from 'dotevn'
import users from './DB/users.js'
import products from './DB/products.js'
import Users from './models/userModels.js'
import Products from './models/productModel.js'
import Order from './models/orderModel.js'

import connectDB from './config/db.js'
import Order from './models/orderModel.js'
import User from './models/userModels.js'
import Product from './models/productModel.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createUser = await User.insertMany(users)

    } catch (error) {

    }
}