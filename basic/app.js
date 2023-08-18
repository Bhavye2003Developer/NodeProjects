const express = require('express')
const app = express()
const port = 3000


const blogs = [
    { title: 'Blog 1', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.' },
    { title: 'Blog 2', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.' },
    { title: 'Blog 3', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.' },
    { title: 'Blog 4', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.' },
]


// to set some application settings
app.set('view engine', 'ejs')
app.set('views', './html')

app.use((req, res, next) => {
    console.log(`Request made at : ${req.url}\nTime: ${new Date()}\n\n`)
    next()
})


app.get('/', (req, res) => {
    // res.send('Hello World!')
    // res.sendFile(__dirname + '/html/index.html')
    res.render('home', { title: 'Home', blogs })
})

app.get('/create', (req, res) => {
    res.render('create')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})