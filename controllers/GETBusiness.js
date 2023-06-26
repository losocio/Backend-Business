/*
Controllers to fetch Business data from DB

*/

const getBusiness = async (req, res) => {
    try {
        const data = "/getBusinessController"
        res.send(data)
    } catch(err) {

    }
}

const getBusinessID = async (req, res) => {
    try {
        const data = "/getBusinessController"
        res.send(data)
    } catch(err) {

    }
}

module.exports = { getBusiness, getBusinessID }