const mongoose = require('mongoose')
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DE_CONNECT_MONGO_ATLAS)
        console.log(">>> DB is connected >>>");

    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB