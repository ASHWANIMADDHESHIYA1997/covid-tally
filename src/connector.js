
//const mongodb = require('mongodb');

const mongoURI = "mongodb://localhost:27017" + "/covidtally"

let mongoose = require('mongoose');
const { tallySchema } = require('./schema')


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true,family: 4 })
    .then(() => { console.log("connection established with mongodb server online"); })
    .catch(err => {
        console.log("error while connection", err)
    });
collection_connection = mongoose.model('covidtally', tallySchema)


exports.connection = collection_connection;
// mongoose.connect('mongodb://localhost/notes-db-app',{
//     useNewUrlParser: true, 
//     useUnifiedTopology: true,
//     family: 4,
// })