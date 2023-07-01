const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        interests: {
            type: String,
            enum: [
                'Retail',
                'Food and Beverage',
                'Professional Services',
                'Health and Wellness',
                'Hospitality and Tourism',
                'Technology and Software',
                'Manufacturing and Industrial',
                'Arts and Entertainment',
                'Education and Training',
                'Financial and Banking'
            ],
            required: true
        },
        receivesOffers: {
            type: Boolean,
            default: false,
            required: true
        }
    },
    {
        timestamp: true,
        versionKey: false
    }
)

module.exports = mongoose.model("User", UserSchema) 