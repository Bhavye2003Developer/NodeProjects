// // const name = "Bhavye"

// // function getAge(a) {
// //     console.log(`My age is ${a}`)
// // }

// // module.exports = {name, getAge}

const fs = require('fs')
// const os = require('os')
// const child = require('child_process')
// const { exit } = require('process')

// // fs.readFile('./index.js', 'utf-8', (err, data) => {
// //     console.log(data)
// // })

// // const data = fs.readFileSync('./index.js', 'utf-8')
// // console.log(data)

// // const args = process.argv.slice(2)
// // console.log(`The sum is : ${parseInt(args[0]) + parseInt(args[1])}`)

// // console.log(os.platform())
// // console.log(os.userInfo())

// // child.exec('python3 test.py 45', (err, stdout, stderr) => {
// //     console.log(stdout)
// // })
// // // console.log(stdout.toString())


const http = require('http')
const querystring = require('querystring')
const url = require('url')

let data = fs.readFileSync("index.html", "utf-8")
// console.log(data)

// const server = http.createServer((req, res) => {
//     console.log(`The request made : ${req.url}`)
//     res.setHeader("Name", "Bhavye Jain")
//     // res.setHeader("Content-type", "text/html")
//     // res.end("<h1>Hello world</h1>")
//     res.end(data)
// })

const defaultPort = 8080;
const port = process.env.port || defaultPort;

const server = http.createServer((req, res) => {
    // const query = url.parse(req.url, true)['query']
    // console.log(`The method : ${req.method} | url : ${req.url}`)
    // console.log(query)
    // console.log("\n\n")
    // switch (req.method) {
    //     case "POST":
    //         data = `<h1>Hey Bhavye, You have sent the POST request to ${req.url}`
    //         break
    //     case "GET":
    //         data = `<h1>Hey CyberGod, THE GOD OF UNIVERSE, You have sent the GET request to ${req.url}`
    //         break
    // }
    // res.end(data)
    res.end("Hey")
})

server.listen(port)