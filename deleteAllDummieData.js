const {dbConnect} = require("./config/mongo.js")

require("dotenv").config()

const User = require("./models/user.js")
const Business = require("./models/business.js")

const dbURI = process.env.DB_URI
dbConnect(dbURI)


User.deleteMany({})
.then(() => {
  console.log('Users deleted');
})
.catch((error) => {
  console.error('Error creating businesses:', error);
});

Business.deleteMany({})
.then(() => {
  console.log('Businesses deleted');
})
.catch((error) => {
  console.error('Error creating businesses:', error);
});