const express = require("express")
const {validateBusiness} = require("../middleware/validator") // TODO get these routes right
const {createBusiness, editBusiness, deleteBusiness} = require("../controllers/admin")

const router = express.Router()
router.use(express.json())

//
router.put("/updateBusinessInfo", validateBusiness, createBusiness) 

// 
router.put("/updateBusinessPhotos/:id", validateBusiness, editBusiness)

//
router.put("/updateBusinessTexts/", getBusiness)

//
router.delete("/deleteBusiness/:id", getBusiness)

//
router.use() // TODO use general common business GETs
//router.get("/getBusiness/:city/:activity", deleteBusiness) // research got to use multiple params/queries

module.exports = { router }

/**
- [ ] PUT info into business (needs JWT)
- [ ] PUT business photos (needs JWT)
- [ ] PUT business text (needs JWT)
- [ ] DELETE business (needs JWT)
- [ ] GET email of users from same city that want to recibe info about a specific activity (needs JWT)
 */