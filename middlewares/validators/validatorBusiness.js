const { body } = require("express-validator") // Has to be imported by a file using express app to work
const validateResult = require("../../utils/validateResultUtil")

const validatorBusiness = [
    body("name").exists().notEmpty().isString(),isLength( {min:3, max: 99} ),
    body("cif").exists().notEmpty().isNumeric(),
    body("address").exists().notEmpty().isString(),isLength( {min:8, max: 32} ),
    body("email").exists().notEmpty().isEmail(),
    body("phone").exists().notEmpty().isString().isLength(12),

    (req, res, next) => {
        return validateResult(req, res, next) 
    }
]

/*
const validatorBusiness = () => { // TODO Might need to have req, res, next as argument, not sure
    body("name").exists().notEmpty().isString(),isLength( {min:3, max: 99} )
    body("cif").exists().notEmpty().isNumeric()
    body("address").exists().notEmpty().isString(),isLength( {min:8, max: 32} )
    body("email").exists().notEmpty().isEmail()
    body("phone").exists().notEmpty().isString().isLength(12)

    return validateResult(req, res, next) 
}
*/

model.exports = {validatorBusiness}