
const createBusiness = async (req, res) => {
    try {
        const incomingData = req.body;
        // Create data to upload to db
        const data = await storageModel.create()
        res.send(data) // Return
    } catch(err) {
        // TODO errorHandler en utils 
    }
}

const deleteBusiness = async (req, res) => {
    try {

    } catch(err) {

    }
}

module.exports = {createBusiness, deleteBusiness}