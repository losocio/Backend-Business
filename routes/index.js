const express = require("express")
const routerAdmin = require("./admin.js")
const routerBusiness = require("./business.js")
const routerUserPublic = require("./userPublic.js")
const routerUserRegistered = require("./userRegistered.js")

const router = express.Router()

router.use(routerAdmin)
router.use(routerBusiness)
router.use(routerUserPublic)
router.use(routerUserRegistered)

module.exports = router 

/*
const User = require("../models/user.js")
router.get("/getUsers", async (req, res) => {
    try {
        const query = {}

        const data = await User.find(query)
        res.send(data)
        
    } catch(err) {
        // SLACK log I think
        handleHTTPError(res, "ERROR_GET_BUSINESS")
    }
})
*/