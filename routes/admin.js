/**
 * Funtionalities:
 * POST businesses (just with "basic" data)
 * PUT business, editing all data, except score and such 
 * DELETE business
 * MAYBE GET bussiness (copy from when making user) TODO 
 */

const express = require("express")
const {validateBusiness} = require("../middleware/validator") // TODO get these routes right
const {createBusiness, editBusiness, deleteBusiness} = require("../controllers/admin")

const router = express.Router()
router.use(express.json())

// Upload new businesses to the website
// Here I can pass an array of validators chains and the router package will recognice it and run them secuencially. This isnt normal JS behaviour 
router.post("/uploadBusiness", validateBusiness, createBusiness) 

// Edit preexisting business
router.put("/editBusiness/:id", validateBusiness, editBusiness)

// Delete preexisting business
router.delete("/deleteBusiness/:id", deleteBusiness)

module.exports = router