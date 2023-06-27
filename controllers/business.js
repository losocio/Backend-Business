const { matchedData } = require("express-validator")
const Business = require("../models/business.js")


const editPhotos = async (req, res) => {
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

const editTexts = async (req, res) => {
    
}

const getMailingList = async (req, res) => {
    
}

module.exports = {
    editPhotos,
    editTexts,
    getMailingList
}

/*
- [ ] PATCH info into business (needs JWT)
- [ ] PATCH business photos (needs JWT)
- [ ] PATCH business text (needs JWT)
- [ ] GET email of users from same city that want to recibe info about a specific activity (needs JWT)
*/