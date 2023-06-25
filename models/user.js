const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema(
    {
        /*id: {
            type: Number,
            unique: true
        },*/
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
            enum: ["",""],
            required: true // TODO add different types of bussinesses
        },
        receivesOffers: {
            type: Boolean,
            required: true
        }
    },
    {
        timestamp: true,
        versionKey: false
    }
)

module.exports = mongoose.model("UserModel", UserSchema) 