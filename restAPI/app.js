const express = require('express')
const quotes = require('./controller/quotes')
const port = 8080

const server = express()
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.get('/quotes', (req, res) => {
    res.send(quotes.getQuoteData())
})


server.route('/quote/create')
    .get((req, res) => {
        res.sendFile('html/createQuote.html', { 'root': '.' })
    })
    .post((req, res) => {
        quotes.createQuote(req.body)
        console.log("Quote created successfully")
        res.redirect('/quotes')
    })

server.route('/quote/:id')
    .get((req, res) => {
        const quote = quotes.getQuote(req.params['id'])
        if (quote) {
            res.send(quote)
        }
        else {
            res.send("<h1>ID doesn't exists</h1>")
        }
    })
    .delete((req, res) => {
        quotes.deleteQuote(req.params['id'])
        console.log("Quote deleted successfully")
        res.redirect('/quotes')
    })


server.listen(port, () => {
    console.log(`Listening at port : ${port}`)
})