const express = require("express")
const { validatorCreateBusiness, validatorEditBusinessAdmin, validatorDeleteBusinessAdmin } = require("../middlewares/validatorBusiness.js")
const { createBusiness, editBusiness, deleteBusiness } = require("../controllers/admin.js")
const routerGetBusiness = require("./getBusiness.js")

const routerAdmin = express.Router()
routerAdmin.use(express.json())

// Upload new businesses to the website
// Here I can pass an array of validators chains and the router package will recognice it and run them secuencially. This isnt normal JS behaviour 
routerAdmin.post("/admin/createBusiness", validatorCreateBusiness, createBusiness) 

// Edit preexisting business
routerAdmin.patch("/admin/editBusiness", validatorEditBusinessAdmin, editBusiness)

// Delete preexisting business
routerAdmin.delete("/admin/deleteBusiness", validatorDeleteBusinessAdmin, deleteBusiness)

// Get businesses in multiple ways
routerAdmin.use("/admin", routerGetBusiness)

module.exports = routerAdmin

/*
- [ ] POST Upload business (needs JWT) (creates JWT for Business)
- [ ] PATCH Modify business (needs JWT)
- [ ] GET all businesses (needs JWT)
- [ ] GET business by id (needs JWT)
- [ ] DELETE business (needs JWT)
*/