const { matchedData } = require("express-validator")
const { UserModel } = require("./models/user.js")
const fs = require("fs")

const registerBusiness = async (req, res) => {
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
    try{
        const {id} = matchedData(req)

        const dataFile = await UserModel.findById(id)

        await UserModel.deleteOne({_id:id})

        const filePath = MEDIA_PATH + "/" + dataFile.filename
        fs.unlinkSync(filePath)
        
        const data = {
            filePath,
            deleted: true
        }
        res.send(data)
    } catch(err){
        //console.log(err)
        //handleHttpError(res, "ERROR_GET_ITEM")
    }
}

module.exports = { registerBusiness, deleteBusiness }