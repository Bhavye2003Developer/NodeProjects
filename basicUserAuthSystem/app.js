const express = require('express')
const logger = require('morgan')
const fs = require('fs')
const port = 8080

const server = express()
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use(logger('common', {
    stream: fs.createWriteStream('./access.log', { flags: 'a' })
}));
server.use(logger('dev'));



function registerUser({ username, email, password }) {
    const userData = JSON.parse(fs.readFileSync("./static/users.json", { encoding: "utf-8" }))

    if (checkUser(username, password)) {
        return false
    }
    ++userData.numUsers
    userData["users"].push(
        { id: userData.numUsers, username, email, password }
    )
    fs.writeFileSync("./static/users.json", JSON.stringify(userData))
    return true;
}


function checkUser({ username, password }) {
    const userData = JSON.parse(fs.readFileSync("./static/users.json", { encoding: "utf-8" }))
    let flag = false
    userData['users'].forEach(user => {
        if (String(user.username) == username && String(user.password) == password) {
            flag = true
            return
        }
    });
    return flag
}


server.get("/", (req, res) => {
    res.sendFile("./static/home.html", { root: "." })
})


server.get("/register", (req, res) => {
    res.sendFile("./static/register.html", { root: "." })
})

server.post("/register", (req, res) => {
    // console.log(req.body)
    if (!registerUser(req.body)) {
        res.end("User already existed")
    }
    // res.end("<h1>Registered successfully...</h1>")
    res.redirect("/login")
})


server.get("/login", (req, res) => {
    res.sendFile("./static/login.html", { root: "." })
})

server.post("/login", (req, res) => {
    console.log(req.body)
    const isExited = checkUser(req.body)
    console.log(`Flag : ${isExited}`)
    if (isExited) {
        res.end(`<h1>Welcome ${req.body['username']}, You are successfully logged in.`)
    }
    else {
        res.end("<h1>Login credentials invalid!!!</h1>")
    }
})

server.listen(port, () => {
    console.log(`listening at ${port}...`)
})