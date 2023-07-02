const { query } = require("express-validator")
const { validateResult } = require("../utils/validateResult.js")


/*
query("order").optional().custom((value) => {
        if(value === "score") return true
        else return false
    }),
*/

const validatorGetBusiness = [
    query("order").optional().isString(),
    (req, res, next) => {
        return validateResult(req, res, next)
    }
]

const validatorGetBusinessById = [
    query("id").exists().notEmpty().isMongoId(),
    query("order").optional().isString(),
    (req, res, next) => {
        return validateResult(req, res, next)
    }
]

const validatorGetBusinessByCity = [
    query("city").exists().notEmpty().isString(),
    query("order").optional().isString(),

    (req, res, next) => {
        return validateResult(req, res, next)
    }
]

const validatorGetBusinessByActivity = [
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
    query("order").optional().isString(),

    (req, res, next) => {
        return validateResult(req, res, next)
    }
]

const validatorGetBusinessByCityByActivity = [
    query("city").exists().notEmpty(),
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
    query("order").optional().isString(),

    (req, res, next) => {
        return validateResult(req, res, next)
    }
]

module.exports = { 
    validatorGetBusiness,
    validatorGetBusinessById,
    validatorGetBusinessByCity,
    validatorGetBusinessByActivity,
    validatorGetBusinessByCityByActivity
}