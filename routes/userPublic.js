const express = require("express")
const { validatorRegisterUser, validatorLoginUser } = require("../middlewares/validatorUser.js")
const { registerUser, loginUser } = require("../controllers/userPublic.js")
const routerGetBusiness = require("./getBusiness.js")

const routerUserPublic = express.Router()
routerUserPublic.use(express.json())

// Register a new user
routerUserPublic.post("/publicUser/registerUser", validatorRegisterUser, registerUser)

// Login a user
routerUserPublic.get("/publicUser/loginUser", validatorLoginUser, loginUser)

// Get businesses in multiple ways
routerUserPublic.use("/publicUSer", routerGetBusiness)


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