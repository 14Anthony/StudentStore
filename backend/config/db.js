const mongoose = require( 'mongoose')

const connectDB = async () => {
    // process.env.MONGODB_URI
    try {
        const conn = await mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/storefront", {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,

        })
        console.log(`MongoDB Connected:${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
        "git pull"
    }
}
// hello send.
module.exports = connectDB
