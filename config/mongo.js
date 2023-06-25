const mongoose = require("mongoose")

const dbConnect = (dbURI) => {
    mongoose.set("strictQuery", false) // TODO Lets you make queries with mistakes in them
    mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    const db = mongoose.connection

    db.on('error', console.error.bind(console, 'MongoDB connection error: '))
    
    db.once('open', () => {
        console.log('Connected to MongoDB Atlas');
    })
}

module.exports = { dbConnect }

/*
const mongoose = require("mongoose")
const dbConnect = (dbURI) => {
    //const dbURI = process.env.DB_URI
    //console.log(dbURI)
    mongoose.set("strictQuery", false) // no se que hace
    mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, res) => {
        if(!err) console.log("Conectando a la db")
        else console.err("Error al conectar")
    })
}

module.exports = { dbConnect }
*/