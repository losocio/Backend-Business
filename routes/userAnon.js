const express = require("express")
const {validateBusiness} = require("../middleware/validator") // TODO get these routes right
const {createBusiness, editBusiness, deleteBusiness} = require("../controllers/admin")

const router = express.Router()
router.use(express.json())

router.get


module.exports = { router }

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