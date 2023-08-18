const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
    console.log("New request made:")
    next()
})

app.get('/', (req, res) => {
    // res.send('Hello World!')
    res.sendFile('./html/index.html', { root: __dirname })
})

app.get('/about', (req, res) => {
    res.sendFile('./html/about.html', { root: __dirname })
})

app.use((req, res) => {
    res.sendFile('./html/404page.html', { root: __dirname })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})