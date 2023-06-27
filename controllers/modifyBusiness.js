const { matchedData } = require("express-validator")
const Business = require("../models/business.js")

const editBusiness = async (req, res) => { 
    try {
        //const incomingData = matchedData(req)
        const id = req.query.id
        const update = req.body

        const updatedBusiness = await Business.findOneAndUpdate(
            {_id: id}, 
            {"name": "Tiamo Frikandel"}, 
            {new: true}
        )        
        res.send(updatedBusiness)
    } catch(err) {
        // TODO add errorHandler from utils 
        // SLACK log I think
        console.log(err)
    }
}


const deleteBusiness = async (req, res) => {
    try{
        //const {id} = matchedData(req)
        const id = req.query.id

        const deletedBusiness = await Business.findOneAndDelete({_id:id})

        res.send(deletedBusiness)
    } catch(err){
        //console.log(err)
        //handleHttpError(res, "ERROR_GET_ITEM")
        console.log(err)
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