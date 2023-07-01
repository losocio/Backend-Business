const { matchedData } = require("express-validator")
const User = require("../models/user.js")
const Business = require("../models/business.js")
const { handleHTTPError } = require("../utils/handleHTTPError.js")
const { verifyToken } = require("../utils/handleJWT.js")
require("dotenv").config("../.env")

const JWT_SECRET = process.env.JWT_SECRET

const editUser = async (req, res) => { 
    try {
        const id = matchedData(req, { locations: ["query"] }).id
        const update = matchedData(req, { locations: ["body"] })
        const token = matchedData(req, { locations: ["headers"] }).authorization

        const userTokenData = verifyToken(token, JWT_SECRET)
        
        if(id !== userTokenData._id) throw new Error("ERROR_USER_EDIT_NOT_PERMITED")

        const updatedUser = await User.findOneAndUpdate(
            {_id: userTokenData._id}, 
            update, 
            {new: true}
        )        
        res.send(updatedUser)
    } catch(err) {
        // SLACK log I think
        handleHTTPError(res, err.message) 
    }
}

const deleteUser = async (req, res) => {
    try{
        const id = matchedData(req, { locations: ["query"] }).id
        const token = matchedData(req, { locations: ["headers"] }).authorization

        const userTokenData = verifyToken(token, JWT_SECRET)

        if(id !== userTokenData._id) throw new Error("ERROR_USER_DELETE_NOT_PERMITED")

        const deletedUser = await User.findOneAndDelete({_id: userTokenData._id})

        res.send(deletedUser)
    } catch(err){
        // SLACK log I think
        handleHTTPError(res, err.message)
    }
}

const voteBusiness = async (req, res) => {  // TODO NEEDS token
    try{
        const id = matchedData(req, { locations: ["query"] }).id
        const { vote, review } = matchedData(req, { locations: ["body"] })
        const token = matchedData(req, { locations: ["headers"] }).authorization

        const validToken = verifyToken(token, JWT_SECRET)
        console.log(validToken)
        if(validToken === false) throw new Error("ERROR_VOTE_BUSINESS") // TODO check what it return so this works, right now it always triggers

        const businessToVote = await Business.findById(id)

        if(review) businessToVote.reviews.push(review)
        
        if(vote === "positive") {
            businessToVote.votes++
            businessToVote.votesPositive++
        } else businessToVote.votes++
    
        const votedBusiness = await Business.findOneAndUpdate(
            {_id: id}, 
            businessToVote, 
            {new: true}
        )  

        res.send(votedBusiness)
    } catch(err){
        // SLACK log I think
        handleHTTPError(res, err.message)
    }
}


module.exports = {
    editUser,
    deleteUser,
    voteBusiness
}
