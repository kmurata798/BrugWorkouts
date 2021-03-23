const mongoose = require('mongoose');


// Program Mongoose schema
const programSchema = new mongoose.Schema({
    title: {type: String, required: [true, 'A program must have a title']},
    description: {type: String, required: true},
    price: {type: String, required: true},
    imagePath: {type: String, required: true},
    updatedOn: {type: Date, required: true, default: Date.now}
});

// Create Program model using the schema created
const Program = mongoose.model('Program', programSchema);
module.exports = Program