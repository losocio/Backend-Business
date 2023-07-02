const express = require("express")
const { 
    validatorGetBusiness,
    validatorGetBusinessById,
    validatorGetBusinessByCity,
    validatorGetBusinessByActivity,
    validatorGetBusinessByCityByActivity } = require("../middlewares/validatorGetBusiness.js")
const { getBusiness, getBusinessById, getBusinessByCity, getBusinessByActivity, getBusinessByCityByActivity } = require("../controllers/getBusiness.js")

const routerGetBusiness = express.Router()

// I don't need to specify queries in the routes
// Each function will check if it need to order the data and will act accordingly

/**
* @openapi
*  /api/admin/getBusiness:
*   get:
*     tags:
*     - GetBusiness
*     summary: "getBusiness"
*     description: Returns a list of all businesses, can be returned ordered by their score
*     requestBody:
*       content:
*         application/json:
*           schema:
*             $ref: "#/components/schemas/business"
*     responses:
*       '200':
*         description: Returns a list of all businesses
*       '400':
*         description: Invalid order parameter
*       '404':
*         description: Business not found
*     security:
*     - bearerAuth: []
*/
routerGetBusiness.get("/getBusiness", validatorGetBusiness, getBusiness)

/**
* @openapi
*  /api/admin/getBusinessById:
*   get:
*     tags:
*     - GetBusiness
*     summary: "getBusinessById"
*     description: Returns a business by it's id
*     requestBody:
*       content:
*         application/json:
*           schema:
*             $ref: "#/components/schemas/business"
*     responses:
*       '200':
*         description: Returns a business by it's id
*       '400':
*         description: Invalid order parameter
*       '404':
*         description: Business not found
*     security:
*     - bearerAuth: []
*/
routerGetBusiness.get("/getBusiness/byId", validatorGetBusinessById, getBusinessById)

/**
* @openapi
*  /api/admin/getBusinessByCity:
*   get:
*     tags:
*     - GetBusiness
*     summary: "getBusinessByCity"
*     description: Returns a list of businesses by their city, can be returned ordered by their score
*     requestBody:
*       content:
*         application/json:
*           schema:
*             $ref: "#/components/schemas/business"
*     responses:
*       '200':
*         description: Returns a list of businesses by their city
*       '400':
*         description: Invalid order parameter
*       '404':
*         description: Business not found
*     security:
*     - bearerAuth: []
*/
routerGetBusiness.get("/getBusiness/byCity", validatorGetBusinessByCity, getBusinessByCity)

/**
* @openapi
*  /api/admin/getBusinessByActivity:
*   get:
*     tags:
*     - GetBusiness
*     summary: "getBusinessByActivity"
*     description: Returns a list of businesses by their activity, can be returned ordered by their score
*     requestBody:
*       content:
*         application/json:
*           schema:
*             $ref: "#/components/schemas/business"
*     responses:
*       '200':
*         description: Returns a list of businesses by their activity
*       '400':
*         description: Invalid order parameter
*       '404':
*         description: Business not found
*     security:
*     - bearerAuth: []
*/
routerGetBusiness.get("/getBusiness/byActivity", validatorGetBusinessByActivity, getBusinessByActivity)

/**
* @openapi
*  /api/admin/getBusinessbyCityAndActivity:
*   get:
*     tags:
*     - GetBusiness
*     summary: "getBusinessByCityByActivity"
*     description: Returns a list of businesses by their city and activity, can be returned ordered by their score
*     requestBody:
*       content:
*         application/json:
*           schema:
*             $ref: "#/components/schemas/business"
*     responses:
*       '200':
*         description: Returns a list of businesses by their city and activity
*       '400':
*         description: Invalid order parameter
*       '404':
*         description: Business not found
*     security:
*     - bearerAuth: []
*/
routerGetBusiness.get("/getBusiness/byCityAndActivity", validatorGetBusinessByCityByActivity, getBusinessByCityByActivity)


module.exports = routerGetBusiness

/*
- [ ] GET all business
- [ ] GET all business, ordered by page score
- [ ] GET business by id
- [ ] GET business by their city
- [ ] GET business by their city, ordered by page score
- [ ] GET business by their activity
- [ ] GET business by their activity, ordered by page score
- [ ] GET business by their city and activity
- [ ] GET business by their city and activity, ordered by page score
*/