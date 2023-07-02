const { matchedData } = require("express-validator")
const User = require("../models/user.js")
const Business = require("../models/business.js")
const { handleHTTPError } = require("../utils/handleHTTPError.js")
const { verifyToken } = require("../utils/handleJWT.js")

const editUser = async (req, res) => { 
    try {
        const id = matchedData(req, { locations: ["query"] }).id
        const update = matchedData(req, { locations: ["body"] })
        const token = matchedData(req, { locations: ["headers"] }).authorization

        const userTokenData = verifyToken(token)
        
        if(id !== userTokenData._id) {
            const error = new Error("ERROR_USER_EDIT_NOT_PERMITED")
            error.statusCode = 403
            throw error
        }

        const updatedUser = await User.findOneAndUpdate(
            {_id: userTokenData._id}, 
            update, 
            {new: true}
        )        
        res.send(updatedUser)
    } catch(err) {
        handleHTTPError(res, err.message, err.statusCode) 
    }
}

const deleteUser = async (req, res) => {
    try{
        const id = matchedData(req, { locations: ["query"] }).id
        const token = matchedData(req, { locations: ["headers"] }).authorization

        const userTokenData = verifyToken(token)

        if(id !== userTokenData._id) {
            const error = new Error("ERROR_USER_DELETE_NOT_PERMITED")
            error.statusCode = 403
            throw error
        }

        const deletedUser = await User.findOneAndDelete({_id: userTokenData._id})

        res.send(deletedUser)
    } catch(err){
        handleHTTPError(res, err.message, err.statusCode)
    }
}

const voteBusiness = async (req, res) => {
    try{
        const id = matchedData(req, { locations: ["query"] }).id
        const { vote, review } = matchedData(req, { locations: ["body"] })
        const token = matchedData(req, { locations: ["headers"] }).authorization

        const validToken = verifyToken(token)

        if(validToken === false) {
            const error = new Error("ERROR_VOTE_NOT_PERMITED")
            error.statusCode = 401
            throw error
        }

        const businessToVote = await Business.findById(id)

        if(review) businessToVote.reviews.push(review)

        if(vote === "positive") {
            businessToVote.votes++
            businessToVote.votesPositive++
        } else businessToVote.votes++

        businessToVote.score = Math.round(businessToVote.votesPositive / businessToVote.votes * 100)

        const votedBusiness = await Business.findOneAndUpdate(
            {_id: id}, 
            businessToVote, 
            {new: true}
        )  

        res.send(votedBusiness)
    } catch(err){
        handleHTTPError(res, err.message, err.statusCode)
    }
}

module.exports = {
    editUser,
    deleteUser,
    voteBusiness
}
