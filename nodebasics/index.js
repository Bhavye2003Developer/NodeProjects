const express = require('express')
const morgan = require('morgan')
const fs = require('fs')
const port = 8080

const server = express();

// to serve static files
server.use(express.static("html"))

// Middleware
// server.use((req, res, next) => {
//     console.log(req.ip)
//     console.log(req.query)
//     next()
// })

const auth = (req, res, next) => {
    if (req.query['code'] === '123') {
        console.log("Authorised")
        next()
    }
    else {
        console.log("Unauthorised!!!")
        res.sendStatus(401) // unauthoried
    }
}

// parsebody
server.use(express.json()) // built-in middleware


server.use(morgan('common', {
    stream:
        fs.createWriteStream('./access.log', { flags: 'a' })
}));

server.use(morgan('common'))
server.use((req, res, next) => {
    console.log("\n\n")
    next()
})


// server.use(auth)
server.use((req, res, next) => {
    console.log(`Request at : ${req.url}`)
    console.log(req.body)
    next()
})



server.get('/', auth, (req, res) => {
    // res.send("<h1>Hey bhavye</h1>")
    console.log("At : /")
    res.sendFile("./html/home.html", { root: "." })
})


server.get('/product/:id', (req, res) => {
    res.send(`You are product : ${req.params['id']}`)
})

server.get("/demo", (req, res) => {
    res.send(`Your details :<br><br>Name : ${req.query['name']}<br>Age : ${req.query['age']}<br>Subject : ${req.query['subject']}`)
})

server.listen(port, () => {
    console.log(`Server listening at : ${port}`)
})