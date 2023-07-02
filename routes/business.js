const express = require("express")
const { validatorEditBusiness,
        validatorDeleteBusiness,
        validatorEditImages,
        validatorEditTexts,
        validatorGetMailingList } = require("../middlewares/validatorBusiness.js")
const { editBusiness, deleteBusiness, editImages, editTexts, getMailingList } = require("../controllers/business.js")

const routerBusiness = express.Router()

/**
* @swagger
*  /api/business/updateBusiness:
*   patch:
*     tags:
*     - "Business"
*     summary: "editBusiness"
*     description: Update business data
*     requestBody:
*       content:
*         application/json:
*           schema:
*             $ref: "#/components/schemas/business"
*     responses:
*       '200':
*         description: Returns the updated business
*       '403':
*         description: Business edit not permited
*     security:
*     - bearerAuth: []
*/
routerBusiness.patch("/business/updateBusiness", validatorEditBusiness, editBusiness) 

/**
* @swagger
*  /api/business/updateImages:
*   patch:
*     tags:
*     - Business
*     summary: "editImages"
*     description: Add new images to business
*     requestBody:
*       content:
*         application/json:
*           schema:
*             $ref: "#/components/schemas/business"
*     responses:
*       '200':
*         description: Returns the updated business with new images
*       '403':
*         description: Business image edit not permited
*     security:
*     - bearerAuth: []
*/
routerBusiness.patch("/business/updateImages", validatorEditImages, editImages)

/**
* @swagger
*  /api/business/updateTexts:
*   patch:
*     tags:
*     - Business
*     summary: "editTexts"
*     description: Add new texts to business
*     requestBody:
*       content:
*         application/json:
*           schema:
*             $ref: "#/components/schemas/business"
*     responses:
*       '200':
*         description: Returns the updated business with new texts
*       '403':
*         description: Business text edit not permited
*     security:
*     - bearerAuth: []
*/
routerBusiness.patch("/business/updateTexts", validatorEditTexts, editTexts)

/**
* @swagger
*  /api/business/deleteBusiness:
*   delete:
*     tags:
*     - Business
*     summary: "deleteBusiness"
*     description: Delete business
*     requestBody:
*       content:
*         application/json:
*           schema:
*             $ref: "#/components/schemas/business"
*     responses:
*       '200':
*         description: Returns the deleted business
*       '403':
*         description: Business deletion not permited
*     security:
*     - bearerAuth: []
*/
routerBusiness.delete("/business/deleteBusiness", validatorDeleteBusiness, deleteBusiness)

/**
* @swagger
*  /api/business/getMailingList:
*    get:
*      tags:
*      - Business
*      summary: "getMailingList"
*      description: Get a list of emails of all users in the same city as the business with a given interest
*      requestBody:
*        content:
*          application/json:
*            schema:
*              $ref: "#/components/schemas/business"
*      responses:
*        '200':
*          description: Returns the mailing list
*        '400':
*          description: Error get mailing list, wrong id
*      security:
*      - bearerAuth: []
*/
routerBusiness.get("/business/getMailingList", validatorGetMailingList, getMailingList)

module.exports = routerBusiness

/*
- [ ] PATCH info into business (needs JWT)
- [ ] PATCH business images (needs JWT)
- [ ] PATCH business text (needs JWT)
- [ ] DELETE business (needs JWT)
- [ ] GET email of users from same city that want to recibe info about a specific activity (needs JWT)
*/