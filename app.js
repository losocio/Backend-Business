const express = require("express")
const { dbConnect } = require("./config/mongo.js")
const router = require("./routes/index.js")
//const morganBody = require("morgan-body")
//const { loggerStream } = require("./utils/handleLogger.js")

require("dotenv").config()

const app = express()

const dbURI = process.env.DB_URI
dbConnect(dbURI)

app.use("/api", router)

/*
morganBody(app, {
    noColors: true, skip: function(req, res) {
        return res.statusCode < 400
    }, stream: loggerStream
})*/

const port = process.env.PORT
app.listen(port, () => {
    console.log("Servidor iniciado en el puerto" , port)
})