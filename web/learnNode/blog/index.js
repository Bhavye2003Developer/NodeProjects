const express = require('express')
const app = express()

const all_blogs = []

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = 3000

// middleware
app.use((req, res, next) => {
    console.log(`${req.url}  ${req.method}  ${req.hostname}`)
    next()
})

app.get('/', (req, res) => {
    res.render('index', { all_blogs })
})


app.get('/blog/create', (req, res) => {
    res.render('create')
})

app.post('/blog/create', (req, res) => {
    // res.render('create')
    const title = req.body.title
    const content = req.body.content

    // console.log(title, content)
    all_blogs.push({
        title, content
    })
    res.redirect('/')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})