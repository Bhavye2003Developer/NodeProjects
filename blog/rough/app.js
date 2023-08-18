// setTimeout(function () {
//     console.log('setTimeout');
// }, 3000)

// console.log(__dirname)
// console.log(__filename)


// const data = require('./getData')
const os = require('os')
const fs = require('fs')

// console.log("In app.js")
// console.log(data)
// console.log(os)

// fs.readFile('./data.txt', function (err, data) {
//     console.log("Reading file...")
//     console.log(data.toString())
// })


// const data = "Bhavye is god of this universe"

// fs.writeFile('./data.txt', data, function (err) {
//     console.log("Writing file...")
// })

// if (fs.existsSync('TheNewDirectory')) {
//     console.log("Directory Exists")
// }
// else {
//     fs.mkdir("TheNewDirectory", function (err) {
//         if (err) {
//             console.log("Error Occured")
//         }
//         else {
//             console.log("Directory Created")
//         }
//     })
// }

// fs.rmdir("TheNewDirectory", function (err) {
//     if (err){
//         console.log("Error Occured")
//     }
//     else{
//         console.log("Directory Deleted")
//     }
// })


let data = ""
for (let i = 0; i < 500; i++) {
    data += "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.\n"   
}

fs.writeFile('./data.txt', data, function (err) {
    console.log("Writing file...")
})