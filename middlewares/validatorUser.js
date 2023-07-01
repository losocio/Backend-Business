const { body, header, query } = require("express-validator")
const { validateResult } = require("../utils/validateResult.js")

const validatorRegisterUser = [
    body("name").exists().notEmpty().isString().isLength({ min: 3, max: 65 }), 
    body("email").exists().notEmpty().isEmail(),
    body("age").exists().notEmpty().isInt({ min: 1, max: 120 }),
    body("password").exists().notEmpty().isString(),
    body("city").exists().notEmpty().isString(),
    body("interests").exists().notEmpty().custom((value) => {
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
    body("receivesOffers").exists().notEmpty().isBoolean(),

    (req, res, next) => {
        return validateResult(req, res, next) 
    }
]

const validatorLoginUser = [
    body("email").exists().notEmpty().isEmail(),
    body("password").exists().notEmpty().isLength( {min:8, max: 16} ),

    (req, res, next) => {
        return validateResult(req, res, next)
    }
]

const validatorEditUser = [
    header("authorization").exists().notEmpty().isJWT(),

    query("id").exists().notEmpty().isMongoId(),

    body("name").exists().optional().notEmpty().isString().isLength({ min: 3, max: 65 }), 
    body("email").exists().optional().notEmpty().isEmail(),
    body("age").exists().optional().notEmpty().isInt({ min: 1, max: 120 }),
    body("password").exists().optional().notEmpty().isString(),
    body("city").exists().optional().notEmpty().isString(),
    body("interests").exists().optional().notEmpty().custom((value) => {
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
    body("receivesOffers").exists().optional().isBoolean(),

    (req, res, next) => {
        return validateResult(req, res, next) 
    }
]

const validatorDeleteUser = [
    header("authorization").exists().notEmpty().isJWT(),
    
    query("id").exists().notEmpty().isMongoId(),
    
    (req, res, next) => {
        return validateResult(req, res, next) 
    }
]

module.exports = { 
    validatorRegisterUser,
    validatorLoginUser,
    validatorEditUser,
    validatorDeleteUser
}