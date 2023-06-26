const express = require("express")
const {validateBusiness} = require("../middleware/validator.js") // TODO get these routes right
const {} = require("../controllers/.js")
const {routerGETBusiness} = require("./GETBusiness")

const routerUserPublic = express.Router()
routerUserPublic.use(express.json())

routerUserPublic.post("/registerUser", registerUser)

// Get businesses in multiple ways
routerUserPublic.use(routerGETBusiness)
//routerUserPublic.use("/", routerGETBusiness)


module.exports = routerUserPublic

/*
- [ ] GET all business
- [ ] GET all business, ordered by page score
- [ ] GET business by id
- [ ] GET business by id, ordered by page score
- [ ] GET business by their city
- [ ] GET business by their city, ordered by page score
- [ ] GET business by their city and activity
- [ ] GET business by their city and activity, ordered by page score
- [ ] POST to Register
*/