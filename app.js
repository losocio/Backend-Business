const express = require("express")
const cors = require("cors")
const { dbConnect } = require("./config/mongo.js")
const router = require("./routes/index.js")
const swaggerUi = require("swagger-ui-express")
const swaggerSpecs = require("./docs/swagger.js")

require("dotenv").config()

const app = express()

app.use(cors()) 
app.use(express.json())

const dbURI = process.env.DB_URI
dbConnect(dbURI)

app.use("/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpecs)
)

app.use("/api", router)

const port = process.env.PORT
app.listen(port, () => {
    console.log("Server started on port", port)
})