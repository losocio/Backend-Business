const express = require("express")
const {dbConnect} = require("./config/mongo.js")
//const router = require("./routes/index.js") // TODO error from this

require("dotenv").config()

const app = express()

const dbURI = process.env.DB_URI
dbConnect(dbURI)

// TODO Testing 
const routerAdmin = require("./routes/admin.js")
app.use("/api", routerAdmin)

const routerBusiness = require("./routes/business.js")
app.use("/api", routerBusiness)

const port = process.env.PORT //|| 3000
app.listen(port, () => {
    console.log("Servidor iniciado en el puerto" , port)
})