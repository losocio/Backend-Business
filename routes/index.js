const express = require("express")
const fs = require("fs")
const router = express.Router()


const removeExtension = (file) => {
    return file.split(".").shift()
}

// Create a unique router for all the files in the current directory
fs.readdirSync(__dirname).map((file) => {
    const name = removeExtension(file)

    if(name !== "index" && name !== "GETBusiness") {
        router.use("/" + name, require("./"+name)) // The use() method adds an imported router object to another router object in this file
    }
})


module.exports = router