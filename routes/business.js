const express = require("express")
//const {validateBusiness} = require("../middleware/validator") // TODO get these routes right
const {editBusiness, deleteBusiness} = require("../controllers/business")

const routerBusiness = express.Router()
routerBusiness.use(express.json())

// Finish defineing business
routerBusiness.patch("/updateBusinessInfo", editBusiness) 

// Add photos to business
routerBusiness.patch("/updateBusinessPhotos?id=id", editBusinessPhotos)

// Add texts to business
routerBusiness.patch("/updateBusinessTexts?id=id", editBusinessTexts)

// Delete business
routerBusiness.delete("/deleteBusiness?id=id", deleteBusiness)

// Get mailing list
routerBusiness.get("/getMailingList?id=id&activity=activity", getMailingList)

module.exports = routerBusiness

/*
- [ ] PATCH info into business (needs JWT)
- [ ] PATCH business photos (needs JWT)
- [ ] PATCH business text (needs JWT)
- [ ] DELETE business (needs JWT)
- [ ] GET email of users from same city that want to recibe info about a specific activity (needs JWT)
*/