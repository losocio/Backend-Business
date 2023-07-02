const { matchedData } = require("express-validator")
const User = require("../models/user.js")
const { handleHTTPError } = require("../utils/handleHTTPError.js")
const { hash, compare } = require("../utils/handlePassword.js")
const { signExpiringToken } = require("../utils/handleJWT.js")

const registerUser = async (req, res) => {
    try {
        const incomingUser = matchedData(req, { locations: ["body"] })

        const hashedPassword = await hash(incomingUser.password)
        incomingUser.password = hashedPassword
        
        const registeredUser = await User.create(incomingUser)

        registeredUser.set("password", undefined, { strict: false })

        res.send(registeredUser)
    } catch(err) {
        handleHTTPError(res, "ERROR_REGISTER_USER", err.statusCode)
    }
}

const loginUser = async (req, res) => {
    try {
        const data = matchedData(req, { locations: ["body"] })
        
        const user = await User.findOne({ email: data.email }).select("password name email")
        
        if(!user) {
            const error = new Error("ERROR_USER_LOGIN_WRONG_EMAIL")
            error.statusCode = 400
            throw error
        }

        const hashedPassword = user.password;
        const passwordCheck = await compare(data.password, hashedPassword)
        
        if(!passwordCheck) {
            const error = new Error("ERROR_USER_LOGIN_WRONG_PASSWORD")
            error.statusCode = 400
            throw error
        }

        user.set("password", undefined, {strict:false})
        
        const userAndToken = {
            token: signExpiringToken(user),
            user
        }
        
        res.send(userAndToken)
    } catch(err) {
        handleHTTPError(res, err.message, err.statusCode)
    }
}

module.exports = { 
    registerUser,
    loginUser 
}

// - [ ] POST to Register