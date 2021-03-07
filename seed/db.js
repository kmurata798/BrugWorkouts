require('dotenv/config')
const mongoose = require('mongoose')

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}

mongoose.connect(process.env.DATABASE_URL, options);

mongoose.connection.on('connected', () => {
    // uncomment to reset the database
    // mongoose.connection.dropDatabase()
    console.log('Connected')
})

module.exports = mongoose.connection
