const express = require("express")
const {dbConnect} = require("./config/mongo.js")
//const router = require("./routes/index.js") // TODO error from this

require("dotenv").config()

const app = express()

const UserModel = require("./models/user.js")
const BusinessModel = require("./models/business.js")

const dbURI = process.env.DB_URI
dbConnect(dbURI)

/*
const {routerGETBusiness} = require("./routes/GETBusiness.js")
app.use("/api", routerGETBusiness) // TODO for testing, this will be imported by other routers
*/

//app.use("/api", router)


const {fillUsers, fillBusinesses} = require("./test/fillDB.js")
//console.log(fillUsers, fillBusinesses)


UserModel.create(fillUsers)
.then(() => {
  console.log('Users created');
})
.catch((error) => {
  console.error('Error creating users:', error);
});


BusinessModel.create(fillBusinesses)
.then(() => {
    console.log('Businesses created');
})
.catch((error) => {
    console.error('Error creating businesses:', error);
});

/*
const port = process.env.PORT //|| 3000
app.listen(port, () => {
    console.log("Servidor iniciado en el puerto" , port)
})*/