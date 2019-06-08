const mongoose = require('mongoose');

const formIncidentSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    price: Number,
})

module.exports = mongoose.model('formIncidentSchema', formIncidentSchema);