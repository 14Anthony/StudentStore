import mongoose from 'mongoose'
import dotenv from 'dotevn'
import users from './DB/users.js'
import products from './DB/products.js'
import User from './models/userModels.js'
import Product from './models/productModel.js'
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


        const adminUser = createUser[0]._id

        const studentProducts = products.map(product => {
            return { ...product, user: adminUser }
        })

        await Product.insertMany(studentProducts)

        console.log('Students Inventoried for Sale')
        process.exit
    } catch (error) {
        console.error('${error}')
        process.exit(1)
    }
}

const deleteData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()


        console.log('Students Empty')
        process.exit
    } catch (error) {
        console.error('${error}')
        process.exit(1)
    }
}
// I found this on youtube, I hope this works. apperantly you can capert the node backend/seed -d to thru this process.""  this goes way back to the beginning of node training and understanding that node.argv.

if (process.argv[2] === '-d') {
    destroyData()
    // if no information that imput it.
} else {
    importData()
}

// i need to recognize this on the json some how.  import...?  