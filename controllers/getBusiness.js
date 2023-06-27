/*
Controllers to fetch Business data from DB

*/
const Business = require("../models/business.js")

const getBusiness = async (req, res) => {
    try {
        const order = req.query.order

        const query = {}

        switch(order) {
            case undefined:
                const data = await Business.find(query) // TODO this chatGPT answer might be wrong
                res.send(data)
                break
            case "score":
                const dataToSort = await Business.find(query)
                res.send(dataToSort.sort((a, b) => b.score - a.score))
                break
            default: throw new BadRequestError("Invalid order parameter")
        }
    } catch(err) {
        // TODO handle error
    }
}

const getBusinessById = async (req, res) => {
    try {
        const id = req.query.id
        const data = await Business.findById(id)
        if (data) {
            res.send(data)
        } else {
            throw new NotFoundError("Business not found")
        }
    } catch(err) {
        // TODO handle error in different ways depending of type
    }
}

const getBusinessByCity = async (req, res) => {
    try {
        const order = req.query.order
        const city = req.query.city

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
        // TODO handle error in different ways depending of type
    }
}

const getBusinessByActivity = async (req, res) => {
    try {
        const order = req.query.order
        const activity = req.query.activity

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
        // TODO handle error in different ways depending of type
    }
}

const getBusinessByCityByActivity = async (req, res) => {
    try {
        const order = req.query.order
        const city = req.query.city
        const activity = req.query.activity

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
        // TODO handle error in different ways depending of type
    }
}

module.exports = { 
    getBusiness,
    getBusinessById,
    getBusinessByCity, 
    getBusinessByActivity,
    getBusinessByCityByActivity
}