const fs = require('fs')
const getQuoteData = () => {
    const data = fs.readFileSync('quotes.json', { 'encoding': 'utf-8' })
    return JSON.parse(data)
}

const getQuote = (id) => {
    const quote = getQuoteData()['quotes'][getQuoteData()['quotes'].map(function (x) {
        return x.id;
    }).indexOf(Number(id))]
    return quote
}

const createQuote = ({ quote, author }) => {
    const new_data = getQuoteData()
    ++new_data['numQuotes']
    new_data['quotes'].push({
        id: new_data['numQuotes'],
        quote,
        author
    })
    fs.writeFileSync('quotes.json', JSON.stringify(new_data))
}

const deleteQuote = (id) => {
    const data = getQuoteData()
    const quoteIndex = data['quotes'].map(function (x) {
        return x.id;
    }).indexOf(Number(id))
    if (quoteIndex > -1) {
        data['quotes'].splice(quoteIndex, 1);
        --data['numQuotes']
    }
    fs.writeFileSync('quotes.json', JSON.stringify(data))
}

module.exports = { getQuoteData, getQuote, createQuote, deleteQuote }