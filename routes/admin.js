/**
 * Funtionalities:
 * Upload businesses
 * 
 * 
 * 
 */

const express = require("express")
const {validateBusiness} = require("../middleware/validator") // TODO get these routes right
const {createBusiness, editBusiness} = require("../controllers/")

const router = express.Router()
router.use(express.json())

// Upload new businesses to the website
router.post("/uploadBusiness", validateBusiness, createBusiness)

// Edit preexisting business
router.put("/editBusiness/:id", validateBusiness, editBusiness)

// Delete preexisting business
router.delete("/editBusiness/:id", validateBusiness, deleteBusiness)

module.exports = router