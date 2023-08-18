const { quote, getID } = require('./models/quoteSchema')


// CREATE
const createNewQuote = async ({ title, author, quoteToSay, quoteID }) => {
    const q = new quote()
    q.title = title
    q.author = author
    q.quote = quoteToSay
    q.quoteID = quoteID
    await q.save()
}

// READ
const getAllQuotes = async () => {
    try {
        const allQuotes = await quote.find();
        return allQuotes;
    } catch (err) {
        console.log(err);
        throw err; // Rethrow the error to be caught later if needed
    }
};

const getQuote = async (id) => {
    try {
        const singleQuote = await quote.findOne({ quoteID: id })
        return singleQuote;
    } catch (err) {
        console.log(err);
        throw err; // Rethrow the error to be caught later if needed
    }
}

// DELETE
const deleteQuote = async (id) => {
    const singleQuote = await quote.findOneAndDelete({ quoteID: id })
    return singleQuote
}


const getNewID = async () => {
    const count = await getID.find()
    return count[0]
}

const getIDEntry = async () => {
    const id_object = await getID.findOne({ __v: 0 })
    return id_object.quoteIDCount
}

const incrementID = async () => {
    getIDEntry().then(async id => {
        const id_object = await getID.findOneAndUpdate({ __v: 0 }, { quoteIDCount: id + 1 })
    })
}


module.exports = { createNewQuote, getAllQuotes, getQuote, getNewID, incrementID, deleteQuote }