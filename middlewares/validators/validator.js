const {check} = require("express-validator") // Has to be imported by a file using express app to work
const validateResult = require("../../utils/validateResultUtil")

const validatorBusiness = [
    check("name").exists().notEmpty().isString(),isLength( {min:3, max: 99} ),
    check("cif").exists().notEmpty().isNumeric(),
    check("address").exists().notEmpty().isString(),isLength( {min:8, max: 16} ),
    check("email").exists().notEmpty().isEmail(),
    check("phone").exists().notEmpty().isString().isLength(12),
    (req, res, next) => {
        return validateResult(req, res, next)
    }
]

model.exports = {validatorBusiness}