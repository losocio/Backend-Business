const express = require("express")
//const {validateBusiness} = require("../middleware/validator") // TODO get these routes right
const {editPhotos, editTexts, getMailingList} = require("../controllers/business.js")
const {editBusiness, deleteBusiness} = require("../controllers/modifyBusiness.js")

const routerBusiness = express.Router()
routerBusiness.use(express.json())

// Finish defineing business
routerBusiness.patch("/business/updateBusiness", editBusiness) 

// Add photos to business
routerBusiness.patch("/business/updatePhotos", editPhotos)

// Add texts to business
routerBusiness.patch("/business/updateTexts", editTexts)

// Delete business
routerBusiness.delete("/business/deleteBusiness", deleteBusiness)

// Get mailing list
routerBusiness.get("/business/getMailingList", getMailingList)

module.exports = routerBusiness

/*
- [ ] PATCH info into business (needs JWT)
- [ ] PATCH business photos (needs JWT)
- [ ] PATCH business text (needs JWT)
- [ ] DELETE business (needs JWT)
- [ ] GET email of users from same city that want to recibe info about a specific activity (needs JWT)
*/