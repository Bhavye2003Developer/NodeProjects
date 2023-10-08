const fs = require('fs')

const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// REST API

// CREATE /quotes
app.post('/quotes', (req, res) => {
    const quote = req.body
    if (quote) {
        const all_quotes = getQuotes()
        all_quotes.quotes.push(quote)
        updateAllQuotes(all_quotes)
    }
    res.send(`${req.body.id}`)
})


// READ /quotes
app.get('/quotes', (req, res) => {
    res.send(getQuotes()['quotes'])
})


// READ /quote/:id
app.get('/quotes/:id', (req, res) => {
    const all_quotes = getQuotes()['quotes']

    const quote = all_quotes.find(q => q.id == +req.params.id)

    if (quote) res.send(quote)
    else res.send(JSON.stringify(
        {
            "error": "No Quote Found"
        }
    ))
})


// UPDATE /quotes/:id  -> Update a particular quote
app.patch('/quotes/:id', (req, res) => {
    const all_quotes = getQuotes()
    const quote_index = all_quotes.quotes.findIndex(q => q.id == +req.params.id)
    const quote = all_quotes.quotes[quote_index]
    const new_quote = { ...quote, ...req.body }
    all_quotes.quotes.splice(quote_index, 1, new_quote)  // replacing new quote.
    updateAllQuotes(all_quotes)
    res.send(`${req.params.id}`)
})


// DELETE /quote/:id
app.delete('/quotes/:id', (req, res) => {
    const all_quotes = getQuotes()
    const quote_index = all_quotes.quotes.findIndex(q => q.id == +req.params.id)
    if (quote_index == -1) {
        res.send(JSON.stringify(
            {
                "error": "No Quote Found"
            }
        ))
        return;
    }
    const deleted_quote = all_quotes.quotes[quote_index]
    all_quotes.quotes.splice(quote_index, 1)
    updateAllQuotes(all_quotes)
    res.send(deleted_quote)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


function getQuotes() {
    return JSON.parse(fs.readFileSync("./quotes.json", { encoding: 'utf-8' }))
}
function updateAllQuotes(quotes) {
    fs.writeFileSync("./quotes.json", JSON.stringify(quotes))
}