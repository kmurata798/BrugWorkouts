require('dotenv/config')
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
mongoose.connect('mongodb://localhost/BrugWorkoutsDB', options);

mongoose.connection.on('connected', () => {
    // uncomment to reset the database
    // mongoose.connection.dropDatabase()
    console.log('Connected')
})

module.exports = mongoose.connection
