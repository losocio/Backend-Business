const { matchedData } = require("express-validator")
const { UserModel } = require("./models/user.js")

const createBusiness = async (req, res) => {
    try {
        const incomingData = matchedData(req)
        /*
        const newUser = new User({
            name: incomingData.name,
            email: incomingData.email,
            age: incomingData.age,
            password: incomingData.password,
            city: incomingData.city,
            insterests: incomingData. insterests,
            receivesOffers: incomingData.receivesOffers
        })
        const savedUser = await newUser.save();
        */
        // Con create() cretes a UserModel from the data directly, unlike save()
        const createdUser = await UserModel.create(incomingData)
        res.send(createdUser)
    } catch(err) {
        // TODO add errorHandler from utils 
        // SLACK log I think
    }
}

const deleteBusiness = async (req, res) => {
    try {

    } catch(err) {

    }
}

module.exports = { createBusiness, deleteBusiness }