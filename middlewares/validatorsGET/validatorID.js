const { body } = require("express-validator")
const validateResult = require("../../utils/validateResultUtil")

// TODO Prof comment: No necesita validatorCreateItem porque ya está haciendo uso de Multer

const validatorGetItem = [
    //body("id").exists().notEmpty().isMongoId(),
    body("id").exists().notEmpty().isNumeric(),
    
    (req, res, next) => {
        return validateResult(req, res, next)
    }
]

module.exports = { validatorGetItem }