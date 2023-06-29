const { matchedData } = require("express-validator")
const User = require("../models/user.js")
const { handleHTTPError } = require("../utils/handleHTTPError.js")

const createUser = async (req, res) => {
    try {
        //const incomingData = matchedData(req)
        const incomingData = req.body

        // create() creates a UserModel from the data directly, unlike save()
        const createdUser = await User.create(incomingData)
        res.send(createdUser)
    } catch(err) {
        // SLACK log I think
        handleHTTPError(res, "ERROR_CREATE_USER")
    }
}

module.exports = { createUser }

// - [ ] POST to Register