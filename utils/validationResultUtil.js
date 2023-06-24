const {validationResult} = require("express-validator")

const validateResultsUtil = (req, res, next) => {
    try {
        validationResult(req).throw() // TODO understand
        // I think req contains the validated data (unchanged if correct), throw throws error if not validated
        return next()
    } catch(err) {
        res.status(403)
        res.send(err)
    }
}

module.exports = validateResultsUtil