const express = require("express")
const { validatorEditUser, validatorDeleteUser } = require("../middlewares/validatorUser.js")
const { validatorVoteBusiness } = require("../middlewares/validatorBusiness.js")
const { editUser, deleteUser, voteBusiness } = require("../controllers/userRegistered.js")
const routerGetBusiness = require("./getBusiness.js")

const routerUserRegistered = express.Router()
routerUserRegistered.use(express.json())

// Edit user data
routerUserRegistered.patch("/registeredUser/editUser", validatorEditUser, editUser) // TODO the problem has to do with the request, not the validator

// Delete user
routerUserRegistered.delete("/registeredUser/deleteUser", validatorDeleteUser, deleteUser) // TODO Probably with JWT as identifier

// Vote a business
routerUserRegistered.patch("/registeredUser/voteBusiness", validatorVoteBusiness, voteBusiness)

// Get businesses in multiple ways
routerUserRegistered.use("/registeredUser", routerGetBusiness)

module.exports = routerUserRegistered

/*
- [ ] Everything anon user can do
- [ ] PATCH user data (needs JWT and to be logged in (idk if it's the same thing))
- [ ] DELETE user (needs JWT and to be logged in)
- [ ] PATCH Vote on a business, optional written review (needs JWT)
*/