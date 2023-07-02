const express = require("express")
const { validatorRegisterUser, validatorLoginUser } = require("../middlewares/validatorUser.js")
const { registerUser, loginUser } = require("../controllers/userPublic.js")
const routerGetBusiness = require("./getBusiness.js")

const routerUserPublic = express.Router()

/**
* @openapi
* /api/publicUser/registerUser:
* post:
*   tags:
*   - PublicUser
*   summary: "registerUser"
*   description: Register a new user
*   requestBody:
*       content:
*           application/json:
*               schema:
*                   $ref: "#/components/schemas/user"
*   responses:
*       '200':
*           description: Returns new registered user
*   security:
*   - bearerAuth: []
*/
routerUserPublic.post("/publicUser/registerUser", validatorRegisterUser, registerUser)

/**
* @openapi
* /api/publicUser/loginUser:
* get:
*   tags:
*   - PublicUser
*   summary: "loginUser"
*   description: Login a registered user, email and password must be correct
*   requestBody:
*       content:
*           application/json:
*               schema:
*                   $ref: "#/components/schemas/user"
*   responses:
*       '200':
*           description: Returns new logged in user
*       '400':
*           description: Wrong email or password
*   security:
*   - bearerAuth: []
*/
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