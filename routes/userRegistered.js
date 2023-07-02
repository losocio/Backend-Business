const express = require("express")
const { validatorEditUser, validatorDeleteUser } = require("../middlewares/validatorUser.js")
const { validatorVoteBusiness } = require("../middlewares/validatorBusiness.js")
const { editUser, deleteUser, voteBusiness } = require("../controllers/userRegistered.js")
const routerGetBusiness = require("./getBusiness.js")

const routerUserRegistered = express.Router()

/**
* @openapi
* /api/registeredUser/editUser:
* patch:
*   tags:
*   - RegisteredUser
*   summary: "editUser"
*   description: Edit the user's data. The user can only edit their own data
*   requestBody:
*       content:
*           application/json:
*               schema:
*                   $ref: "#/components/schemas/user"
*   responses:
*       '200':
*           description: Returns the updated user
*       '403':
*           description: User edit not permited
*   security:
*   - bearerAuth: []
*/
routerUserRegistered.patch("/registeredUser/editUser", validatorEditUser, editUser)

/**
* @openapi
* /api/registeredUser/deleteUser:
* delete:
*   tags:
*   - RegisteredUser
*   summary: "deleteUsers"
*   description: Delete the user's account. The user can only delete their own account
*   requestBody:
*       content:
*           application/json:
*               schema:
*                   $ref: "#/components/schemas/user"
*   responses:
*       '200':
*           description: Returns the deleted user
*       '403':
*           description: User deletion not permited
*   security:
*   - bearerAuth: []
*/
routerUserRegistered.delete("/registeredUser/deleteUser", validatorDeleteUser, deleteUser)

/**
* @openapi
* /api/registeredUser/voteBusiness:
* patch:
*   tags:
*   - RegisteredUser
*   summary: "voteBusiness"
*   description: Vote on a business by it's id with an optional review
*   requestBody:
*       content:
*           application/json:
*               schema:
*                   $ref: "#/components/schemas/business"
*   responses:
*       '200':
*           description: Returns voted business
*       '403':
*           description: Vote not permited
*   security:
*   - bearerAuth: []
*/
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