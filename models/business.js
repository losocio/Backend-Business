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
                null,
                "Retail",
                "Food and Beverage",
                "Professional Services",
                "Health and Wellness",
                "Hospitality and Tourism",
                "Technology and Software",
                "Manufacturing and Industrial",
                "Arts and Entertainment",
                "Education and Training",
                "Financial and Banking"
            ]
        },
        title: {
            type: String
        },
        summary: {
            type: String
        },
        images: {
            type: [String]
        },
        texts: {
            type: [String]
        },
        votes: {
            type: Number,
            default: 0
        },
        votesPositive: {    
            type: Number,
            default: 0
        },
        score: {
            type: Number
        },
        reviews: {
            type: [String]
        }
    },
    {
        timestamp: true,
        versionKey: false,
        toJSON: { getters: true }
    }
)

/*
// Document middleware to calculate the "score" field before saving
BusinessSchema.pre("save", (next) => {
  this.score = Math.round(this.votesPositive / this.votes * 100)
  next() 
})

BusinessSchema.pre("save", () => {
    if (this.votes && this.votesPositive) {
      this.score = Math.round((this.votesPositive / this.votes) * 100)
    }
})

// Virtual field, it get computed from other fields from the db
BusinessSchema.virtual("score").get(() => {
    if (this.votes === 0) {
        return 0
    }
    const percentage = (this.votesPositive / this.votes) * 100
    return Math.round(percentage)
})
*/
module.exports = mongoose.model("Business", BusinessSchema)
