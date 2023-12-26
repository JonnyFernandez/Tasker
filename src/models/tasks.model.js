const mongoose = require('mongoose')


const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,

    }
}, { timestamps: true })

module.exports = mongoose.model('Task', taskSchema)


