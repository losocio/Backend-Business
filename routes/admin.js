const express = require("express")
//const {validateBusiness} = require("../middleware/validator.js") // TODO get these routes right
const {createBusiness} = require("../controllers/admin.js")
const {editBusiness, deleteBusiness} = require("../controllers/modifyBusiness.js")
const routerGetBusiness = require("./getBusiness.js")

const routerAdmin = express.Router()
routerAdmin.use(express.json())

// Upload new businesses to the website
// Here I can pass an array of validators chains and the router package will recognice it and run them secuencially. This isnt normal JS behaviour 
routerAdmin.post("/admin/createBusiness", createBusiness) 

// Edit preexisting business
routerAdmin.put("/admin/editBusiness", editBusiness)

// Delete preexisting business
routerAdmin.delete("/admin/deleteBusiness", deleteBusiness)

// Get businesses in multiple ways
routerAdmin.use(routerGetBusiness)
//routerAdmin.use("/", routerGetBusiness)

module.exports = routerAdmin

/*
- [ ] POST Upload business (needs JWT) (creates JWT for Business)
- [ ] PUT Modify business (needs JWT)
- [ ] GET all businesses (needs JWT)
- [ ] GET business by id (needs JWT)
- [ ] DELETE business (needs JWT)
*/