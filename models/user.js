const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
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
            enum: ["",""],
            required: true // TODO add different types of bussinesses
        },
        recivesOffers: {
            type: Boolean,
            required: true
        }
    },
    {
        timestamp: true,
        versionKey: false
    }
)

module.exports = mongoose.model("user", UserSchema) 