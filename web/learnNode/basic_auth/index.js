const fs = require('fs')
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
    console.log(`${req.url}  ${req.method}`)
    next()
})

app.get('/login', (req, res) => {
    res.sendFile('./login.html', { root: __dirname })
})

app.post('/login', (req, res) => {
    if (user) {
        res.send(`<h1>Welcome ${user.username}, You are successfully Logged in.</h1>`)
    }
    else {
        res.send(`<h2>No User exists!!!</h2>`)
    }
})

app.get('/register', (req, res) => {
    res.sendFile('./index.html', { root: __dirname })
})

app.post('/register', (req, res) => {
    console.log(req.body)
    if (register_user(req.body)) {
        res.send("User registered successfully")
    }
    else {
        res.send("Error occurred!!!")
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


function register_user(user) {
    try {
        const all_users = getAllUsers()

        if (getUser(user)) {
            // user exists
            console.log("User already exists")
            return false
        }

        all_users.push(user)
        updateUsers(all_users)
        return true
    }
    catch (e) {
        return false
    }
}


function getAllUsers() {
    return JSON.parse(fs.readFileSync("./users.json", { encoding: 'utf-8' }))
}

function updateUsers(all_users) {
    fs.writeFileSync("./users.json", JSON.stringify(all_users))
}

function getUser(user) {
    const all_users = getAllUsers();
    const cur_user = all_users.find(single_user => (single_user.username == user.username && single_user.password == user.password))
    return cur_user
}