const express = require("express")
//const {validateBusiness} = require("../middlewares/validatorsPOSTPUT/validatorBusiness.js") // TODO get these routes right
const { getBusiness, getBusinessById, getBusinessByCity, getBusinessByCityByActivity } = require("../controllers/getBusiness.js")

const routerGetBusiness = express.Router()
routerGetBusiness.use(express.json())

// TODO TEST
routerGetBusiness.get("/test", (req, res) => {
    res.send("TEST SUCCESS")
});

// Each function will check if it need to order the data and will act accordingly (in this files controller)
// GET all the businesses
routerGetBusiness.get("/getBusiness", getBusiness)

// GET all the businesses, ordered by score
routerGetBusiness.get("/getBusiness?order=order", getBusiness)

// GET a business by it's id
routerGetBusiness.get("/getBusiness?id=id", getBusinessById)

// GET a business by it's id, ordered by score
routerGetBusiness.get("/getBusiness?id=id&order=order", getBusinessById)

// GET businesses that match a city
routerGetBusiness.get("/getBusiness?city=city", getBusinessByCity)

// GET businesses that match a city, ordered by score
routerGetBusiness.get("/getBusiness?city=city&order=order", getBusinessByCity)

// TODO I could add a search just by activity

// GET businesses that match a city and an
routerGetBusiness.get("/getBusiness?city=city&activity=activity", getBusinessByCityByActivity)

// GET businesses that match a city and an, ordered by score
routerGetBusiness.get("/getBusiness?city=city&activity=activity&order=order", getBusinessByCityByActivity)


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

module.exports = { routerGetBusiness }

/*
- [ ] GET all business
- [ ] GET all business, ordered by page score
- [ ] GET business by id
- [ ] GET business by id, ordered by page score
- [ ] GET business by their city
- [ ] GET business by their city, ordered by page score
- [ ] GET business by their city and activity
- [ ] GET business by their city and activity, ordered by page score
*/