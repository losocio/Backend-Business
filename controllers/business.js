const { matchedData } = require("express-validator")
const Business = require("../models/business.js")
const User = require("../models/user.js")
const { handleHTTPError } = require("../utils/handleHTTPError.js")
const { verifyToken } = require("../utils/handleJWT.js")

const editBusiness = async (req, res) => { 
    try {
        const id = matchedData(req, { locations: ["query"] }).id
        const { activity, title, summary, images, texts} = matchedData(req, { locations: ["body"] })
        const token = matchedData(req, { locations: ["headers"] }).authorization

        const businessTokenData = verifyToken(token)

        if(id !== businessTokenData._id) throw new Error("ERROR_BUSINESS_EDIT_NOT_PERMITED")

        const updatedBusiness = await Business.findOneAndUpdate(
            {_id: id}, 
            {
                "activity": activity,
                "title": title,
                "summary": summary,
                "images": images,
                "texts": texts 
            }, 
            {new: true}
        )        
        res.send(updatedBusiness)
    } catch(err) {
        // SLACK log I think
        handleHTTPError(res, err.message)
    }
}

const deleteBusiness = async (req, res) => {
    try{
        const id = matchedData(req, { locations: ["query"] }).id
        const token = matchedData(req, { locations: ["headers"] }).authorization

        const businessTokenData = verifyToken(token)

        if(id !== businessTokenData._id) throw new Error("ERROR_BUSINESS_DELETE_NOT_PERMITED")

        const deletedBusiness = await Business.findOneAndDelete({_id:id})

        res.send(deletedBusiness)
    } catch(err){
        // SLACK log I think
        handleHTTPError(res, err.message)
    }
}

const editImages = async (req, res) => { 
    try {
        const id = matchedData(req, { locations: ["query"] }).id
        const newImages = matchedData(req, { locations: ["body"] }).images
        const token = matchedData(req, { locations: ["headers"] }).authorization

        const businessTokenData = verifyToken(token)

        if(id !== businessTokenData._id) throw new Error("ERROR_BUSINESS_IMAGE_EDIT_NOT_PERMITED")

        const preBusiness = await Business.findById(id)

        let images = preBusiness.images

        images.push(...newImages)

        const updatedBusiness = await Business.findOneAndUpdate(
            {_id: id}, 
            {"images": images}, 
            {new: true}
        )        
        res.send(updatedBusiness)
    } catch(err) {
        // SLACK log I think
        handleHTTPError(res, err.mesage)
    }
}

const editTexts = async (req, res) => {
    try {
        const id = matchedData(req, { locations: ["query"] }).id
        const newTexts = matchedData(req, { locations: ["body"] }).texts
        const token = matchedData(req, { locations: ["headers"] }).authorization

        const businessTokenData = verifyToken(token)

        if(id !== businessTokenData._id) throw new Error("ERROR_BUSINESS_TEXTS_EDIT_NOT_PERMITED")
        
        const preBusiness = await Business.findById(id)

        let texts = preBusiness.texts
        texts.push(...newTexts)

        const updatedBusiness = await Business.findOneAndUpdate(
            {_id: id}, 
            {"texts": texts}, 
            {new: true}
        )        
        res.send(updatedBusiness)
    } catch(err) {
        // SLACK log I think
        handleHTTPError(res, err.message)
    }
}

// By providing the businesses id, it will search for all users in the same city than the business with the provided activity/interest and want to receive emails
const getMailingList = async (req, res) => {
    try {
        const { id, activity } = matchedData(req, { locations: ["query"] })
        const token = matchedData(req, { locations: ["headers"] }).authorization

        const businessTokenData = verifyToken(token)

        if(id !== businessTokenData._id) throw new Error("ERROR_GET_MAILING_LIST")

        const business = await Business.findById(id)

        const mailingList = await User.find({
            "city": business.city,
            "interests": activity,
            "receivesOffers": true
        })        

        const mailingListEmails = mailingList.map((user) => {return user.email})
        
        res.send({"emails": mailingListEmails})
    } catch(err) {
        // SLACK log I think
        handleHTTPError(res, err.message)
    }
}

module.exports = {
    editBusiness,
    deleteBusiness,
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