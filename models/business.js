const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        cif: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        city: {
            type: String
        },
        activity: {
            type: String,
            enum: ["", ""] // TODO add types of businesses
        },
        title: {
            type: String
        },
        summary: {
            type: String
        },
        images: {
            type: [String], // Array of image URLs
            required: true
        },
        texts: {
            type: [String], // Array of text
            required: true
        },
        votes: {
            type: Number
        },
        votesPositive: {    
            type: Number
        },
        reviews: {
            type: [String]
        }
    },
    {
        timestamp: true,
        versionKey: false
    }
)

// Virtual field, it get computed from other fields from the db
UserSchema.virtual("score").get(() => {
    return (this.votesPositive / this.votes) * 100
})

module.exports = mongoose.model("user", UserSchema)