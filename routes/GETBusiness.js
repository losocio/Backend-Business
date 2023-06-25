const express = require("express")
//const {validateBusiness} = require("../middlewares/validatorsPOSTPUT/validatorBusiness.js") // TODO get these routes right
const {getBusiness} = require("../controllers/GETBusiness.js") // TODO get this right

const routerGETBusiness = express.Router()
routerGETBusiness.use(express.json())

// Imma implement all the business fetching in one file

// TODOD TEST
routerGETBusiness.get("/test", (req, res) => {
    res.send("TEST SUCCESS")
});

// GET all the businesses
routerGETBusiness.get("/getBusiness", getBusiness)

// GET all the businesses, ordered by score
routerGETBusiness.get("/getBusiness?order=order", getBusiness)

// GET a business by it's id
routerGETBusiness.get("/getBusiness?id=id", getBusiness)

// GET a business by it's id, ordered by score
routerGETBusiness.get("/getBusiness?id=id&order=order", getBusiness)

// GET businesses that match a city
routerGETBusiness.get("/getBusiness?city=city", getBusiness)

// GET businesses that match a city, ordered by score
routerGETBusiness.get("/getBusiness?city=city&order=order", getBusiness)

// I could add a search just by activity

// GET businesses that match a city and an
routerGETBusiness.get("/getBusiness?city=city&activity=activity", getBusiness)

// GET businesses that match a city and an, ordered by score
routerGETBusiness.get("/getBusiness?city=city&activity=activity&order=order", getBusiness)


/*
// GET a business by it's id
routerGETBusiness.get("/getBusiness/:id", getBusiness)

// GET a business by it's id, ordered by score
routerGETBusiness.get("/getBusiness/:id", getBusiness)

// GET businesses that match a city
routerGETBusiness.get("/getBusiness/search/:city", getBusiness)

// GET businesses that match a city, ordered by score
routerGETBusiness.get("/getBusiness/search/:city", getBusiness)

// GET businesses that match a city and an
routerGETBusiness.get("/getBusiness/search/:city/:activity", getBusiness)

// GET businesses that match a city and an, ordered by score
routerGETBusiness.get("/getBusiness/search/:city/:activity", getBusiness)
*/

module.exports = { routerGETBusiness }

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