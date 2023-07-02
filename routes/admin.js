const express = require("express")
const { validatorCreateBusiness, validatorEditBusinessAdmin, validatorDeleteBusinessAdmin } = require("../middlewares/validatorBusiness.js")
const { createBusiness, editBusiness, deleteBusiness } = require("../controllers/admin.js")
const routerGetBusiness = require("./getBusiness.js")

const routerAdmin = express.Router()

/**
* @openapi
*  /api/admin/createBusiness:
*   post:
*     tags:
*     - Admin
*     summary: "createBusiness"
*     description: Register a new business
*     requestBody:
*       content:
*         application/json:
*           schema:
*             $ref: "#/components/schemas/business"
*     responses:
*       '200':
*         description: Returns the created business
*       '400':
*         description: Bad business request
*     security:
*     - bearerAuth: []
*/
routerAdmin.post("/admin/createBusiness", validatorCreateBusiness, createBusiness) 
// Here I can pass an array of validators chains and the router package will recognice it and run them secuencially. This isnt normal JS behaviour 

/**
* @openapi
*  /api/admin/editBusiness:
*   patch:
*     tags:
*     - Admin
*     summary: "editBusiness"
*     description: Edit a business by id
*     requestBody:
*       content:
*         application/json:
*           schema:
*             $ref: "#/components/schemas/business"
*     responses:
*       '200':
*         description: Returns the edited business
*       '404':
*         description: Business not found
*     security:
*     - bearerAuth: []
*/
routerAdmin.patch("/admin/editBusiness", validatorEditBusinessAdmin, editBusiness)

/**
* @openapi
*  /api/admin/deleteBusiness:
*   delete:
*     tags:
*     - Admin
*     summary: "deleteBusiness"
*     description: Delete a business by id
*     requestBody:
*       content:
*         application/json:
*           schema:
*             $ref: "#/components/schemas/business"
*     responses:
*       '200':
*         description: Returns the deleted business
*       '404':
*         description: Business not found
*     security:
*     - bearerAuth: []
*/
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