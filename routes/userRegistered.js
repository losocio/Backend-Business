const express = require("express")
//const {validateBusiness} = require("../middleware/validator.js") // TODO get these routes right
const {} = require("../controllers/.js")
const {routerGETBusiness} = require("./GETBusiness.js")

const routerUserRegistered = express.Router()
routerUserRegistered.use(express.json())

// Edit user data
routerUserRegistered.put("/editUser", editUser) // TODO Probably with JWT as identifier

// Delete user
routerUserRegistered.delete("/deleteUser", deleteUser) // TODO Probably with JWT as identifier

// Vote a business
routerUserRegistered.patch("/scoreBusiness?id=id", scoreBusiness)

// Get businesses in multiple ways
routerUserRegistered.use(routerGETBusiness)
//routerUserRegistered.use("/", routerGETBusiness)


module.exports = routerUserRegistered

/*
- [ ] Everything anon user can do (import anon user routes)
- [ ] PUT user data (needs JWT and to be logged in (idk if it's the same thing))
- [ ] DELETE user (needs JWT and to be logged in)
- [ ] PATCH Vote on a business, optional written review (needs JWT)
*/