const { query, body } = require("express-validator")
const { validateResult } = require("../utils/validateResult.js")

const validatorCreateBusiness = [
    body("name").exists().notEmpty().isString().isLength({ min: 3, max: 65 }), 
    body("cif").exists().notEmpty().isNumeric(),
    body("address").exists().notEmpty().isString().isLength({ min: 8, max: 32 }),
    body("email").exists().notEmpty().isEmail(),
    body("phone").exists().notEmpty().isString().isLength(10),
    
    (req, res, next) => {
        return validateResult(req, res, next) 
    }
]

const validatorEditBusiness = [ // Add optinal() fields for an admin full edit so it works with adminEdit and businessEdit
    query("id").exists().notEmpty().isMongoId(),

    body("city").exists().notEmpty().isString().isLength({ min: 3, max: 15 }), 
    body("activity").exists().notEmpty().custom((value) => {
        if(['Retail',
            'Food and Beverage',
            'Professional Services',
            'Health and Wellness',
            'Hospitality and Tourism',
            'Technology and Software',
            'Manufacturing and Industrial',
            'Arts and Entertainment',
            'Education and Training',
            'Financial and Banking'].includes(value)) return true
        else return false
    }),
    body("title").exists().notEmpty().isString().isLength({ min: 5, max: 32 }),
    body("summary").exists().notEmpty().isString().isLength({ min: 20, max: 500 }),
    body("images").exists().isArray(),
    body("texts").exists().isArray(), // TODO contents of array are string and Length
    
    (req, res, next) => {
        return validateResult(req, res, next) 
    }
]

const validatorDeleteBusiness = [
    query("id").exists().notEmpty().isMongoId(),
    
    (req, res, next) => {
        return validateResult(req, res, next) 
    }
]

const validatorEditImages = [ // Add optinal() fields for an admin full edit so it works with adminEdit and businessEdit
    query("id").exists().notEmpty().isMongoId(),

    body("images").exists().isArray(), // TODO contents of array are string and Length
    
    (req, res, next) => {
        return validateResult(req, res, next) 
    }
]

const validatorEditTexts = [ // Add optinal() fields for an admin full edit so it works with adminEdit and businessEdit
    query("id").exists().notEmpty().isMongoId(),

    body("texts").exists().isArray(), // TODO contents of array are string and Length
    
    (req, res, next) => {
        return validateResult(req, res, next) 
    }
]

module.exports = { 
    validatorCreateBusiness,
    validatorEditBusiness,
    validatorDeleteBusiness,
    validatorEditImages,
    validatorEditTexts 
}