const express = require("express")
const {dbConnect} = require("./config/mongo.js")

require("dotenv").config()

const app = express()

const dbURI = process.env.DB_URI
dbConnect(dbURI)

const {routerGETBusiness} = require("./routes/GETBusiness.js")


app.use("/api", routerGETBusiness)

const port = process.env.PORT //|| 3000
app.listen(port, () => {
    console.log("Servidor iniciado en el puerto" , port)
})