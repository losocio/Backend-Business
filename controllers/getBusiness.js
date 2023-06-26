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
                console.log("getBusiness zaza")
                const data = await Business.find(query).lean("score").exec() // TODO this chatGPT answer might be wrong
                console.log(data)
                res.send(data)
                break
            case "score":
                console.log("getBusiness zaza order")
                const dataToSort = await Business.find(query).lean("score").exec()
                console.log(dataToSort)
                res.send(dataToSort.sort((a, b) => a.score - b.score))
                break
            default: throw new BadRequestError("Invalid order parameter")
        }
    } catch(err) {
        // TODO handle error
    }
}

const getBusinessById = async (req, res) => {
    console.log("getBusinessById zaza")
    try {
        const order = req.query.order
        const id = req.query.id
        switch(order) {
            case undefined:
                const data = await Business.findById(id).lean("score").exec()
                if (data) {
                    res.send(data)
                } else {
                    throw new NotFoundError("Business not found")
                }
                break
            case "score":
                const dataToSort = await Business.findById(id).lean("score").exec()
                if (dataToSort) {
                    res.send(dataToSort.sort((a, b) => a.score - b.score))
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

const getBusinessByCity = async (req, res) => {
    try {
        const order = req.query.order
        const city = req.query.city

        const query = { city: city }

        switch(order) {
            case undefined:
                const data = await Business.find(query).lean("score").exec()
                if (data) {
                    res.send(data)
                } else {
                    throw new NotFoundError("Business not found")
                }
                break
            case "score":
                const dataToSort = await Business.find(query).lean("score").exec()
                if (dataToSort) {
                    res.send(dataToSort.sort((a, b) => a.score - b.score))
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
                const data = await Business.find(query).lean("score").exec()
                if (data) {
                    res.send(data)
                } else {
                    throw new NotFoundError("Business not found")
                }
                break
            case "score":
                const dataToSort = await Business.find(query).lean("score").exec()
                if (dataToSort) {
                    res.send(dataToSort.sort((a, b) => a.score - b.score))
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
    getBusinessByCityByActivity
}