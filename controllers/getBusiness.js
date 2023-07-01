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
                res.send(data)
                break
            case "score":
                const dataToSort = await Business.find(query)
                res.send(dataToSort.sort((a, b) => b.score - a.score))
                break
            default: throw new BadRequestError("Invalid order parameter")
        }
    } catch(err) {
        // SLACK log I think
        handleHTTPError(res, "ERROR_GET_BUSINESS")
    }
}

const getBusinessById = async (req, res) => {
    try {
        const id = matchedData(req, { locations: ["query"] }).id

        const data = await Business.findById(id)

        if (data) {
            res.send(data)
        } else {
            throw new NotFoundError("Business not found")
        }
    } catch(err) {
        // SLACK log I think
        handleHTTPError(res, "ERROR_GET_BUSINESS_BY_ID")
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
                    throw new NotFoundError("Business not found")
                }
                break
            case "score":
                const dataToSort = await Business.find(query)
                if (dataToSort) {
                    res.send(dataToSort.sort((a, b) => b.score - a.score))
                } else {
                    throw new NotFoundError("Business not found")
                }
                break
            default: throw new BadRequestError("Invalid order parameter")
        }
    } catch(err) {
        handleHTTPError(res, "ERROR_GET_BUSINESS_BY_CITY")
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
                    throw new NotFoundError("Business not found")
                }
                break
            case "score":
                const dataToSort = await Business.find(query)
                if (dataToSort) {
                    res.send(dataToSort.sort((a, b) => b.score - a.score))
                } else {
                    throw new NotFoundError("Business not found")
                }
                break
            default: throw new BadRequestError("Invalid order parameter")
        }
    } catch(err) {
        handleHTTPError(res, "ERROR_GET_BUSINESS_BY_ACTIVITY")
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
                    throw new NotFoundError("Business not found")
                }
                break
            case "score":
                const dataToSort = await Business.find(query)
                if (dataToSort) {
                    res.send(dataToSort.sort((a, b) => b.score - a.score))
                } else {
                    throw new NotFoundError("Business not found")
                }
                break
            default: throw new BadRequestError("Invalid order parameter")
        }
    } catch(err) {
        handleHTTPError(res, "ERROR_GET_BUSINESS_BY_CITY_BY_ACTIVITY")
    }
}

module.exports = { 
    getBusiness,
    getBusinessById,
    getBusinessByCity, 
    getBusinessByActivity,
    getBusinessByCityByActivity
}