const { matchedData } = require("express-validator")
const Business = require("../models/business.js")
const { handleHTTPError } = require("../utils/handleHTTPError.js")
const { signPermanentToken } = require("../utils/handleJWT.js")

const createBusiness = async (req, res) => {
    try {
        const incomingData = matchedData(req, { locations: ["body"] })

        console.log(incomingData)
        const business = await Business.create(incomingData)

        const businessAndToken = {
            token: signPermanentToken(business), // This token must be used in later requests
            business
        }
        res.send(businessAndToken)
    } catch(err) {
        // SLACK log I think
        console.log(err)
        handleHTTPError(res, "ERROR_CREATE_BUSINESS")
    }
}

const editBusiness = async (req, res) => { 
    try {
        const id = matchedData(req, { locations: ["query"] }).id
        const update = matchedData(req, { locations: ["body"] })

        const updatedBusiness = await Business.findOneAndUpdate(
            {_id: id}, 
            update, 
            {new: true}
        )        
        res.send(updatedBusiness)
    } catch(err) {
        // SLACK log I think
        handleHTTPError(res, "ERROR_EDIT_BUSINESS")
    }
}

const deleteBusiness = async (req, res) => {
    try{
        const id = matchedData(req, { locations: ["query"] }).id

        const deletedBusiness = await Business.findOneAndDelete({_id:id})

        res.send(deletedBusiness)
    } catch(err){
        // SLACK log I think
        handleHTTPError(res, "ERROR_DELETE_BUSINESS")
    }
}

module.exports = { 
    createBusiness,
    editBusiness,
    deleteBusiness
}

/*
const editBusiness = async (req, res) => { 
    try {
        //const incomingData = matchedData(req)
        const id = req.query.id
        const update = req.body


        const updatedBusiness = await Business.findOneAndUpdate(
            {_id: id}, 
            {"name": "Tiamo Frikandel"}, 
            {new: true}
        )        
        res.send(updatedBusiness)
    } catch(err) {
        // TODO add errorHandler from utils 
        // SLACK log I think
        console.log(err)
    }
}

const deleteBusiness = async (req, res) => {
    try{
        //const {id} = matchedData(req)
        const id = req.query.id

        const deletedBusiness = await Business.findOneAndDelete({_id:id})

        res.send(deletedBusiness)
    } catch(err){
        //console.log(err)
        //handleHttpError(res, "ERROR_GET_ITEM")
        console.log(err)
    }
}
*/

/*
- [ ] POST Upload business (needs JWT) (creates JWT for Business)
*/