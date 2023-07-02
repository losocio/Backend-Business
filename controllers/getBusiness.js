const { matchedData } = require("express-validator")
const Business = require("../models/business.js")
const { handleHTTPError } = require("../utils/handleHTTPError.js")

const getBusiness = async (req, res) => {
    try {
        const order = matchedData(req, { locations: ["query"] }).order
        const query = {}

        switch(order) {
            case undefined:
                const data = await Business.find(query)
                if(data) {
                    res.send(data)
                } else {
                    const error = new Error("ERROR_BUSINESS_NOT_FOUND")
                    error.statusCode = 404
                    throw error
                }
                break
            case "score":
                const dataToSort = await Business.find(query)
                if(dataToSort) {
                    res.send(dataToSort.sort((a, b) => b.score - a.score))
                } else {
                    const error = new Error("ERROR_BUSINESS_NOT_FOUND")
                    error.statusCode = 404
                    throw error
                }
                break
            default:
                const error = new Error("ERROR_INVALID_ORDER_PARAMETER")
                error.statusCode = 400
                throw error
        }
    } catch(err) {
        handleHTTPError(res, "ERROR_GET_BUSINESS", err.statusCode)
    }
}

const getBusinessById = async (req, res) => {
    try {
        const id = matchedData(req, { locations: ["query"] }).id

        const data = await Business.findById(id)

        if (data) {
            res.send(data)
        } else {
            const error = new Error("ERROR_BUSINESS_NOT_FOUND")
            error.statusCode = 404
            throw error
        }
    } catch(err) {
        handleHTTPError(res, "ERROR_GET_BUSINESS_BY_ID", err.statusCode)
    }
}

const getBusinessByCity = async (req, res) => {
    try {
        const order = matchedData(req, { locations: ["query"] }).order
        const city = matchedData(req, { locations: ["query"] }).city

        const query = { city: city }

        switch(order) {
            case undefined:
                const data = await Business.find(query)
                if (data) {
                    res.send(data)
                } else {
                    const error = new Error("ERROR_BUSINESS_NOT_FOUND")
                    error.statusCode = 404
                    throw error
                }
                break
            case "score":
                const dataToSort = await Business.find(query)
                if (dataToSort) {
                    res.send(dataToSort.sort((a, b) => b.score - a.score))
                } else {
                    const error = new Error("ERROR_BUSINESS_NOT_FOUND")
                    error.statusCode = 404
                    throw error
                }
                break
            default: 
                const error = new Error("ERROR_INVALID_ORDER_PARAMETER")
                error.statusCode = 400
                throw error
        }
    } catch(err) {
        handleHTTPError(res, "ERROR_GET_BUSINESS_BY_CITY", err.statusCode)
    }
}

const getBusinessByActivity = async (req, res) => {
    try {
        const order = matchedData(req, { locations: ["query"] }).order
        const activity = matchedData(req, { locations: ["query"] }).activity

        const query = { activity: activity }

        switch(order) {
            case undefined:
                const data = await Business.find(query)
                if (data) {
                    res.send(data)
                } else {
                    const error = new Error("ERROR_BUSINESS_NOT_FOUND")
                    error.statusCode = 404
                    throw error
                }
                break
            case "score":
                const dataToSort = await Business.find(query)
                if (dataToSort) {
                    res.send(dataToSort.sort((a, b) => b.score - a.score))
                } else {
                    const error = new Error("ERROR_BUSINESS_NOT_FOUND")
                    error.statusCode = 404
                    throw error
                }
                break
            default: 
                const error = new Error("ERROR_INVALID_ORDER_PARAMETER")
                error.statusCode = 400
                throw error
        }
    } catch(err) {
        handleHTTPError(res, "ERROR_GET_BUSINESS_BY_ACTIVITY", err.statusCode)
    }
}

const getBusinessByCityByActivity = async (req, res) => {
    try {
        const order = matchedData(req, { locations: ["query"] }).order
        const city = matchedData(req, { locations: ["query"] }).city
        const activity = matchedData(req, { locations: ["query"] }).activity

        const query = { city: city, activity: activity }

        switch(order) {
            case undefined:
                const data = await Business.find(query)
                if (data) {
                    res.send(data)
                } else {
                    const error = new Error("ERROR_BUSINESS_NOT_FOUND")
                    error.statusCode = 404
                    throw error
                }
                break
            case "score":
                const dataToSort = await Business.find(query)
                if (dataToSort) {
                    res.send(dataToSort.sort((a, b) => b.score - a.score))
                } else {
                    const error = new Error("ERROR_BUSINESS_NOT_FOUND")
                    error.statusCode = 404
                    throw error
                }
                break
            default: 
                const error = new Error("ERROR_INVALID_ORDER_PARAMETER")
                error.statusCode = 400
                throw error
        }
    } catch(err) {
        handleHTTPError(res, "ERROR_GET_BUSINESS_BY_CITY_BY_ACTIVITY", err.statusCode)
    }
}

module.exports = { 
    getBusiness,
    getBusinessById,
    getBusinessByCity, 
    getBusinessByActivity,
    getBusinessByCityByActivity
}