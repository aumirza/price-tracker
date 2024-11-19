const mongoose = require('mongoose')


// Constructing mongodb uri
const mongoDbHost = process.env.MONGODB_HOST ?? '127.0.0.1'
const mongoDbPort = process.env.MONGODB_PORT ?? '27017'

const MongoDbURI = `mongodb://${mongoDbHost}:${mongoDbPort}/`

mongoose.connect(
    MongoDbURI, { useNewUrlParser: true }
)

// CONNECTION EVENTS
const db = mongoose.connection;

// db.once('open', () => {
//     console.log('Connecting to MongoDB')
// })

// When successfully connected
db.on('connected', function () {
    console.log('Mongoose default connection open to ' + MongoDbURI);
});

// If the connection throws an error
db.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
db.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
});

module.exports = db