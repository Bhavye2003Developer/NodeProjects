require('dotenv').config()
// console.log(process.env.DB_PASSWORD)
const express = require('express')
const quotesOperations = require('./quotesOperations')
const mongoConnect = require('./mongoConnect')
const port = 8080

// setting up express server
const server = express()
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

mongoConnect.mongoConnect()


server.get('/quotes', async (req, res) => {
    try {
        const allQuotes = await quotesOperations.getAllQuotes();
        // console.log(allQuotes); // Now you can work with the fetched quotes
        res.send(allQuotes);
    } catch (err) {
        console.log(err);
        res.status(500).send("An error occurred");
    }
});


server.route('/quote/create')
    .get((req, res) => {
        res.sendFile('html/createQuote.html', { 'root': '.' })
    })
    .post((req, res) => {
        quotesOperations.getNewID().then((newID) => {
            quotesOperations.createNewQuote({ title: req.body.title, author: req.body.author, quoteToSay: req.body.quote, quoteID: newID.quoteIDCount }).then(() => {
                console.log("Quote inserted successfully")
            })
        })
        quotesOperations.incrementID()

        res.redirect('/quotes')
    })

server.route('/quote/:id')
    .get((req, res) => {
        // const quote = quotes.getQuote(req.params['id'])
        quotesOperations.getQuote(req.params['id']).then((singleQuote) => {
            if (singleQuote) {
                res.send(singleQuote)
            }
            else {
                res.send("<h1>ID doesn't exists</h1>")
            }
        })
    })
    .delete((req, res) => {
        quotesOperations.deleteQuote(req.params['id']).then((singleQuote) => {
            if (singleQuote) {
                console.log("Deleted successfully")
            }
            else {
                console.log("ID doesn't exists.")
            }
        })
        res.redirect('/quotes')
    })

server.listen(port, () => {
    console.log(`Listening at port : ${port}`)
})