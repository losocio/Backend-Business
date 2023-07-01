const express = require("express")
const {dbConnect} = require("./config/mongo.js")
const router = require("./routes/index.js")

require("dotenv").config()

const app = express()

const dbURI = process.env.DB_URI
dbConnect(dbURI)

app.use("/api", router)


const port = process.env.PORT
app.listen(port, () => {
    console.log("Servidor iniciado en el puerto" , port)
})