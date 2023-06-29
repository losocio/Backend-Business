const { query } = require("express-validator")
const { validateResult } = require("../utils/validateResult.js")

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

module.exports = { validatorGetMailingList }