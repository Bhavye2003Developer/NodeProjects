const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.use((req, res, next) => {
    console.log(`at : ${req.url} ${req.method}`)
    next()
})


app.post('/add', (req, res) => {
    let num1 = req.body.num1
    let num2 = req.body.num2
    res.send(`sum : ${num1 + num2}`)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
