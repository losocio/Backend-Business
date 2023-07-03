const {dbConnect} = require("./config/mongo.js")

require("dotenv").config()

const User = require("./models/user.js")
const Business = require("./models/business.js")

const dbURI = process.env.DB_URI
dbConnect(dbURI)

const {fillUsers, fillBusinesses} = require("./test/fillDB.js")

User.create(fillUsers)
.then(() => {
  console.log('Users created');
})
.catch((error) => {
  console.error('Error creating users:', error);
});


Business.create(fillBusinesses)
.then(() => {
    console.log('Businesses created');
})
.catch((error) => {
    console.error('Error creating businesses:', error);
});