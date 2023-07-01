const bcryptjs = require("bcryptjs")

const hash = async (clearPassword) => {
    const hash = await bcryptjs.hash(clearPassword, 10)
    return hash
}

const compare = async (clearPassword, hashedPassword) => {
    const result = await bcryptjs.compare(clearPassword, hashedPassword)
    return result
}

module.exports = { 
    hash,
    compare 
}