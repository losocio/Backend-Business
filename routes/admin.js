const express = require("express")
//const {validateBusiness} = require("../middleware/validator.js") // TODO get these routes right
const {registerBusiness, editBusiness, deleteBusiness} = require("../controllers/admin.js")
const {routerGETBusiness} = require("./GETBusiness.js")

const routerAdmin = express.Router()
routerAdmin.use(express.json())

// Upload new businesses to the website
// Here I can pass an array of validators chains and the router package will recognice it and run them secuencially. This isnt normal JS behaviour 
routerAdmin.post("/uploadBusiness", registerBusiness) 

// Edit preexisting business
routerAdmin.put("/editBusiness?id=id", editBusiness)

// Delete preexisting business
routerAdmin.delete("/deleteBusiness?id=id", deleteBusiness)

// Get businesses in multiple ways
routerAdmin.use(routerGETBusiness)
//routerAdmin.use("/", routerGETBusiness)

module.exports = routerAdmin

/*
- [ ] POST Upload business (needs JWT) (creates JWT for Business)
- [ ] PUT Modify business (needs JWT)
- [ ] GET all businesses (needs JWT)
- [ ] GET business by id (needs JWT)
- [ ] DELETE business (needs JWT)
*/