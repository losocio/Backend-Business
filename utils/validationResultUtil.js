const {validationResult} = require("express-validator")
const { model } = require("mongoose")

const validateResultsUtil = (req, res, next) => {
    try {
        validationResult(req).throw()
        return next()
    } catch(err) {
        res.status(403)
        res.send(err)
    }
}

module.exports = validateResultsUtil