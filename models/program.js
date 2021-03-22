const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: String, required: true},
    updatedOn: {type: Date, required: true, default: Date.now}
});

const Program = mongoose.model('Program', schema);
module.exports = Program