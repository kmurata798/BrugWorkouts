require('dotenv/config')
// require('dotenv').config()
const mongoose = require('mongoose')

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}

// // Connect db using docker mongo url.
// mongoose.connect(process.env.DATABASE_URL, options);

// connect db to 'localhost' if not running with Docker
mongoose.connect(process.env.DATABASE_URL_LOCAL, options);

mongoose.connection.on('connected', () => {
    // uncomment to reset the database
    // mongoose.connection.dropDatabase()
    console.log('Connected to mongo')
})


module.exports = mongoose.connection
