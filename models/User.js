const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },

    fullName: {
        type: String,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },

    password: {
        type: String,
        required: true,
    },

    phone: {
        type: String,
        default: '',
    },

    age: {
        type: Number,
        default: 0,
    },

    gender: {
        type: String,
        default: 'Male',
    },

    bloodGroup: {
        type: String,
        default: '',
    },

    weight: {
        type: String,
        default: '',
    },

    emergencyContact: {
        type: String,
        default: '',
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)