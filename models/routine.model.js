const mongoose = require('mongoose')

const routineSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 30,
    },
    desc: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('Routine', routineSchema)