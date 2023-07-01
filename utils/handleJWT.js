const jwt = require("jsonwebtoken")

require("dotenv").config("../.env")

const JWT_SECRET = process.env.JWT_SECRET

const signPermanentToken = (user) => {
    const sign = jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email
    },
    JWT_SECRET)

    return sign
}

const signExpiringToken = (user) => {
    const sign = jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email
    },
    JWT_SECRET, 
    { expiresIn: "1h" })

    return sign
}


const verifyToken = (token) => {
    try {
        return jwt.verify(token, JWT_SECRET)
    } catch(err) {
        console.log(err)
        return false
    }
}

/*
signExpiringToken({
    _id: "649ee0bb67d5d95e8b2ce96c",
    name: "bob",
    email: "bob@aol.com"
})*/

//verifyToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGEwMDRlOTE2ZjhiZWVmY2NmZGQ3MjYiLCJuYW1lIjoiUmljYXJkbyBQYWxhY2lvcyIsImVtYWlsIjoicnBhbGFjaW9zQHUtdGFkLmNvbSIsImlhdCI6MTY4ODIwODYyMiwiZXhwIjoxNjg4MjEyMjIyfQ.xNzDi55N2D0v2HP6Ey97Z4EHuvzb8TiyTWX574s1Y68")

module.exports = { 
    signPermanentToken,
    signExpiringToken,
    verifyToken 
}