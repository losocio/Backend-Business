const { matchedData } = require("express-validator")
const Business = require("../models/business.js")
const { handleHTTPError } = require("../utils/handleHTTPError.js")

const editBusiness = async (req, res) => { 
    try {
        //const incomingData = matchedData(req)
        const id = req.query.id
        const update = req.body

        const updatedBusiness = await Business.findOneAndUpdate(
            {_id: id}, 
            update, 
            {new: true}
        )        
        res.send(updatedBusiness)
    } catch(err) {
        // SLACK log I think
        handleHTTPError(res, "ERROR_EDIT_BUSINESS")
    }
}

const deleteBusiness = async (req, res) => {
    try{
        //const {id} = matchedData(req)
        const id = req.query.id

        const deletedBusiness = await Business.findOneAndDelete({_id:id})

        res.send(deletedBusiness)
    } catch(err){
        // SLACK log I think
        handleHTTPError(res, "ERROR_DELETE_BUSINESS")
    }
}

module.exports = { 
    editBusiness,
    deleteBusiness
}

/*
- [ ] PUT Modify business (needs JWT)
- [ ] DELETE business (needs JWT)
*/