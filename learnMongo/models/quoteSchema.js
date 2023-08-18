const mongoose = require('mongoose');
const { Schema } = mongoose;

// schema to define structure of ducument
const quoteSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    quote: { type: String, required: true },
    date: { type: Date, default: Date.now },
    quoteID: { type: Number, required: true }
});

const quote = mongoose.model('quote', quoteSchema);

const getIDSchema = new Schema({
    quoteIDCount: { type: Number, required: true }
})
const getID = mongoose.model('getID', getIDSchema)

// const newID = new getID()
// newID.quoteIDCount = 0;
// newID.save()

module.exports = { quote, getID }