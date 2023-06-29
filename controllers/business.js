const { matchedData } = require("express-validator")
const Business = require("../models/business.js")
const User = require("../models/user.js")
const { handleHTTPError } = require("../utils/handleHTTPError.js")

const editImages = async (req, res) => {
    try {
        //const incomingData = matchedData(req)
        const id = req.query.id
        const update = req.body

        const preBusiness = await Business.findById(id)
        
        let images = [...preBusiness.images]
        images.push(update.images)

        const updatedBusiness = await Business.findOneAndUpdate(
            {_id: id}, 
            {"images": images}, 
            {new: true}
        )        
        res.send(updatedBusiness)
    } catch(err) {
        // SLACK log I think
        handleHTTPError(res, "ERROR_EDIT_IMAGES")
    }
}

const editTexts = async (req, res) => {
    try {
        //const incomingData = matchedData(req)
        const id = req.query.id
        const update = req.body

        const preBusiness = await Business.findById(id)
        
        let texts = [...preBusiness.texts]
        texts.push(update.texts)

        const updatedBusiness = await Business.findOneAndUpdate(
            {_id: id}, 
            {"texts": texts}, 
            {new: true}
        )        
        res.send(updatedBusiness)
    } catch(err) {
        // SLACK log I think
        handleHTTPError(res, "ERROR_EDIT_TEXTS")
    }
}

// By providing the businesses id, it will search for all users in the same city than the business with the provided activity/interest and want to receive emails
const getMailingList = async (req, res) => {
    try {
        //const incomingData = matchedData(req)
        const id = req.query.id
        const activity = req.query.activity

        const business = await Business.findById(id)

        const mailingList = await User.find({
            "city": business.city,
            "interests": activity,
            "receivesOffers": true  // TODO for some reason recievesOffers is always false even tho some entries have it true
        })        

        const mailingListEmails = mailingList.map((user) => {return user.email})
        
        res.send({"emails": mailingListEmails})
    } catch(err) {
        // SLACK log I think
        handleHTTPError(res, "ERROR_GET_MAILING_LIST")
    }
}

module.exports = {
    editImages,
    editTexts,
    getMailingList
}

/*
- [ ] PATCH info into business (needs JWT)
- [ ] PATCH business images (needs JWT)
- [ ] PATCH business text (needs JWT)
- [ ] GET email of users from same city that want to recibe info about a specific activity (needs JWT)
*/