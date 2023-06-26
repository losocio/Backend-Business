/**
 * The required fields are to be created/edited by the admin exclusively
 * 
 */

const mongoose = require("mongoose")
const BusinessSchema = new mongoose.Schema(
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
            type: String,
            required: true
        },
        activity: {
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
            ]
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
BusinessSchema.virtual("score").get(() => {
    return (this.votesPositive / this.votes) * 100
})

module.exports = mongoose.model("Business", BusinessSchema)
