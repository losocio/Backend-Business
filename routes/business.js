const express = require("express")
const { validatorEditBusiness,
        validatorDeleteBusiness,
        validatorEditImages,
        validatorEditTexts,
        validatorGetMailingList } = require("../middlewares/validatorBusiness.js")
const { editBusiness, deleteBusiness, editImages, editTexts, getMailingList } = require("../controllers/business.js")

const routerBusiness = express.Router()
routerBusiness.use(express.json())

// Finish defineing business
routerBusiness.patch("/business/updateBusiness", validatorEditBusiness, editBusiness) 

// Add images to business
routerBusiness.patch("/business/updateImages", validatorEditImages, editImages)

// Add texts to business
routerBusiness.patch("/business/updateTexts", validatorEditTexts, editTexts)

// Delete business
routerBusiness.delete("/business/deleteBusiness", validatorDeleteBusiness, deleteBusiness)

// Get mailing list
routerBusiness.get("/business/getMailingList", validatorGetMailingList, getMailingList)

module.exports = routerBusiness

/*
- [ ] PATCH info into business (needs JWT)
- [ ] PATCH business images (needs JWT)
- [ ] PATCH business text (needs JWT)
- [ ] DELETE business (needs JWT)
- [ ] GET email of users from same city that want to recibe info about a specific activity (needs JWT)
*/