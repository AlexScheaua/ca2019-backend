const mongoose = require('mongoose');

const formFeedbackSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    price: Number,
})

module.exports = mongoose.model('formFeedbackSchema', formFeedbackSchema);