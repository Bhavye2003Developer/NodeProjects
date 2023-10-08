// globalThis.console.log("Hey") -> global object

// console.log(__dirname, __filename)

const acc = require('./acc.js')
// console.log(acc)
// acc.getAllAccounts()

// const os = require('os')
// console.log(os.cpus())

const fs = require('fs')

// fs.readFile('./acc.js', (err, data) => {
//     if (err) console.log("Error")
//     else {
//         console.log(data.toString())
//     }
// })


// fs.writeFile("./test.txt", "Hey Bhavye Your are god", (err) => {
//     if (err) console.log("Error occured")
//     else {
//         console.log("File written successfully")
//     }
// })


// const directory = "places"

// if (!fs.existsSync(directory)) {
//     fs.mkdir(directory, (err) => {
//         if (err) console.log(err)
//         else {
//             console.log("Directory created successfully")
//         }
//     })
// }
// else {
//     console.log('Directory already exists')
// }


// if (fs.existsSync(directory)) {
//     fs.rmdir(directory, (err) => {
//         if (err) console.log(err)
//         else {
//             console.log("Directory removed successfully")
//         }
//     })
// }


// const readStream = fs.createReadStream('./test.txt', { encoding: 'utf-8' })
// readStream.on('data', (chunk) => {
//     console.log(chunk, "\n")
// })




// const http = require('http')
// // const html = fs.readFileSync("./views/index.html", { encoding: 'utf-8' })

// const server = http.createServer((req, res) => {
//     let path = './views'
//     console.log(`Hit : ${req.url}`)
//     console.log(`OS : ${req.headers['user-agent']}\n`)
//     res.setHeader("Content-Type", "text/html")

//     switch (req.url) {
//         case '/': {
//             res.statusCode = 200
//             path += '/index.html'
//             break
//         }
//         case '/about': {
//             res.statusCode = 200
//             path += '/about.html'
//             break
//         }
//         default: {
//             console.log(`url not found : ${req.url}`)
//             res.statusCode = 404
//             path += '/error.html'
//             break
//         }
//     }
//     fs.readFile(path, (err, data) => {
//         if (err) {
//             console.log(err)
//             res.end()
//         }
//         else {
//             res.write(data)
//             res.end()
//         }
//     })
// })
// server.listen(3000, 'localhost', () => {
//     console.log('Listening on 3000...')
// })



// const os = require('os')
// console.log(os.hostname())
// console.log(os.platform())



// const { exec } = require('child_process');
// exec('ping www.google.com', (err, stdout, stderr) => {
//     if (err) {
//         // node couldn't execute the command
//         return;
//     }

//     // the *entire* stdout and stderr (buffered)
//     // console.log(`stdout: ${stdout}`);
//     // console.log(`stderr: ${stderr}`);
//     fs.writeFileSync("./output.txt", stdout)
// });



const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
    console.log(`${req.url}  ${req.method}  ${req.headers['user-agent']}  ${new Date()}`)
    next()
})

app.get('/', (req, res) => {
    // res.send('<h1>Hello World!</h1>')
    res.sendFile("./views/index.html", { root: '.' })
})
app.get('/about', (req, res) => {
    // res.send('<h1>This is about page</h1>')
    res.sendFile("./views/about.html", { root: '.' })
})
app.get('/blog/:id', (req, res) => {
    res.send(`<h1>Blog Id : ${req.params.id}</h1>`)
    console.log(req.params)
})
app.get('/info', (req, res) => {
    console.log(req.query)
    res.send(`<h1>Name : ${req.query.name}<br>Age : ${req.query.age}<br>Subject : ${req.query.subject}</h1>`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})