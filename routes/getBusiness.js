const express = require("express")
const { 
    validatorGetBusiness,
    validatorGetBusinessById,
    validatorGetBusinessByCity,
    validatorGetBusinessByActivity,
    validatorGetBusinessByCityByActivity } = require("../middlewares/validatorGetBusiness.js")
const { getBusiness, getBusinessById, getBusinessByCity, getBusinessByActivity, getBusinessByCityByActivity } = require("../controllers/getBusiness.js")

const routerGetBusiness = express.Router()
routerGetBusiness.use(express.json())

// I don't need to specify queries in the routes
// Each function will check if it need to order the data and will act accordingly (in this files controller)

// GET all the businesses
routerGetBusiness.get("/getBusiness", validatorGetBusiness, getBusiness)

// GET a business by it's id
routerGetBusiness.get("/getBusiness/byId", validatorGetBusinessById, getBusinessById)

// GET businesses that match a city
routerGetBusiness.get("/getBusiness/byCity", validatorGetBusinessByCity, getBusinessByCity)

// GET businesses that match an activity
routerGetBusiness.get("/getBusiness/byActivity", validatorGetBusinessByActivity, getBusinessByActivity)

// GET businesses that match a city and an activity
routerGetBusiness.get("/getBusiness/byCity&Activity", validatorGetBusinessByCityByActivity, getBusinessByCityByActivity)


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

/*
// GET all the businesses
routerGetBusiness.get("/getBusiness", getBusiness)

// GET all the businesses, ordered by score
routerGetBusiness.get("/getBusiness?order=order", getBusiness)

// GET a business by it's id
routerGetBusiness.get("/getBusinessById", getBusinessById)

// GET a business by it's id, ordered by score
routerGetBusiness.get("/getBusinessById?id=id&order=order", getBusinessById)

// GET businesses that match a city
routerGetBusiness.get("/getBusinessByCity?city=city", getBusinessByCity)

// GET businesses that match a city, ordered by score
routerGetBusiness.get("/getBusinessByCity?city=city&order=order", getBusinessByCity)

// GET businesses that match a city and an avtivity
routerGetBusiness.get("/getBusinessByCityByActivity?city=city&activity=activity", getBusinessByCityByActivity)

// GET businesses that match a city and an activity, ordered by score
routerGetBusiness.get("/getBusinessByCityByActivity?city=city&activity=activity&order=order", getBusinessByCityByActivity)
*/

/*
// GET a business by it's id
routerGetBusiness.get("/getBusiness/:id", getBusiness)

// GET a business by it's id, ordered by score
routerGetBusiness.get("/getBusiness/:id", getBusiness)

// GET businesses that match a city
routerGetBusiness.get("/getBusiness/search/:city", getBusiness)

// GET businesses that match a city, ordered by score
routerGetBusiness.get("/getBusiness/search/:city", getBusiness)

// GET businesses that match a city and an
routerGetBusiness.get("/getBusiness/search/:city/:activity", getBusiness)

// GET businesses that match a city and an, ordered by score
routerGetBusiness.get("/getBusiness/search/:city/:activity", getBusiness)
*/