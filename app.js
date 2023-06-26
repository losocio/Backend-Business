const express = require("express")
const {dbConnect} = require("./config/mongo.js")
const router = require("./routes/index.js") // TODO error from this

require("dotenv").config()

const app = express()

const dbURI = process.env.DB_URI
dbConnect(dbURI)


const {routerGETBusiness} = require("./routes/getBusiness.js")
app.use("/api", routerGETBusiness) // TODO for testing, this will be imported by other routers


app.use("/api", router)



const port = process.env.PORT //|| 3000
app.listen(port, () => {
    console.log("Servidor iniciado en el puerto" , port)
})