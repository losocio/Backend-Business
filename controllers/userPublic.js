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
        // SLACK log I think
        handleHTTPError(res, "ERROR_REGISTER_USER")
    }
}

class HTTPError extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode
        this.name = "HTTPError"
    }
}

const loginUser = async (req, res) => {
    try {
        const data = matchedData(req, { locations: ["body"] })
        
        const user = await User.findOne({ email: data.email }).select("password name email")
        
        if(!user) throw new HTTPError("ERROR_USER_NOT_FOUND", 404)

        const hashedPassword = user.password;
        const passwordCheck = await compare(data.password, hashedPassword)
        
        if(!passwordCheck) throw new HTTPError("ERROR_INVALID_PASSWORD", 401)

        user.set("password", undefined, {strict:false})
        
        const userAndToken = {
            token: signExpiringToken(user), // This token must be used in later requests
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