const { query, body, header } = require("express-validator")
const { validateResult } = require("../utils/validateResult.js")

const validatorCreateBusiness = [
    body("name").exists().notEmpty().isString().isLength({ min: 3, max: 65 }), 
    body("cif").exists().notEmpty().isNumeric(),
    body("address").exists().notEmpty().isString().isLength({ min: 8, max: 32 }),
    body("email").exists().notEmpty().isEmail(),
    body("phone").exists().notEmpty().isString().isLength(10),
    body("city").exists().notEmpty().isString().isLength({ min: 3, max: 15 }),

    (req, res, next) => {
        return validateResult(req, res, next) 
    }
]

const validatorEditBusiness = [
    query("id").exists().notEmpty().isMongoId(),

    body("name").exists().optional().notEmpty().isString().isLength({ min: 3, max: 65 }), 
    body("cif").exists().optional().notEmpty().isNumeric(),
    body("address").exists().optional().notEmpty().isString().isLength({ min: 8, max: 32 }),
    body("email").exists().optional().notEmpty().isEmail(),
    body("phone").exists().optional().notEmpty().isString().isLength(10),

    body("city").exists().optional().notEmpty().isString().isLength({ min: 3, max: 15 }), 
    body("activity").exists().optional().notEmpty().custom((value) => {
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
    body("title").exists().optional().notEmpty().isString().isLength({ min: 5, max: 32 }),
    body("summary").exists().optional().notEmpty().isString().isLength({ min: 20, max: 500 }),
    body("images").exists().optional().isArray(),
    body("texts").exists().optional().isArray(), // TODO check contents of array if they are string and their Length
    
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

const validatorEditImages = [
    query("id").exists().notEmpty().isMongoId(),

    body("images").exists().isArray(), // TODO contents of array are string and Length
    
    (req, res, next) => {
        return validateResult(req, res, next) 
    }
]

const validatorEditTexts = [
    query("id").exists().notEmpty().isMongoId(),

    body("texts").exists().isArray(), // TODO contents of array are string and Length
    
    (req, res, next) => {
        return validateResult(req, res, next) 
    }
]

const validatorVoteBusiness = [ 
    header("authorization").exists().notEmpty().isJWT(),

    query("id").exists().notEmpty().isMongoId(),

    body("vote").exists().notEmpty().custom((value) => {
        if(['positive',
            'negative'].includes(value)) return true
        else return false
    }), 
    body("review").exists().optional().notEmpty().isString().isLength({min: 10, max: 500}),

    (req, res, next) => {
        return validateResult(req, res, next) 
    }
]

const validatorGetMailingList = [
    query("id").exists().notEmpty().isMongoId(),
    query("activity").exists().notEmpty().custom((value) => {
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

    (req, res, next) => {
        return validateResult(req, res, next)
    }
]

module.exports = { 
    validatorCreateBusiness,
    validatorEditBusiness,
    validatorDeleteBusiness,
    validatorEditImages,
    validatorEditTexts,
    validatorVoteBusiness,
    validatorGetMailingList 
}