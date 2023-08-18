const mongoose = require('mongoose');
const { Schema } = mongoose;

const urlSchema = new Schema({
    originalURL: { type: String, required: true },
    shortURL: { type: String, required: true },
    dateTime: { type: Date, default: Date.now },
    TimesVisit: { type: Number, default: 0 }
})

const urlEntry = mongoose.model('urlTable', urlSchema)  // one url document each: one row.

module.exports = urlEntry