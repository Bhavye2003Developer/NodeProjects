// console.log("Start")


// setTimeout(() => {
//     console.log("Inside timeout")
// }, 3000)


// setInterval(() => {
//     console.log(`Inside interval : ${Math.floor(Math.random() * 10)}`)
// }, 2000)


// function doWork(callback) {
//     callback(45)
//     console.log("Doing work")
// }
// doWork((a) => {
//     console.log("Hey", a)
// })


// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find(function (val, index) {
//     console.log(val, index)
//     // return true
// });

// console.log(found)


// console.log("End")


const { exec } = require('node:child_process');
const fs = require('fs')

const code = `
for i in range(10):
    print(i)
`
const command = `echo ${code} > main.py`
// console.log(command)


// fs.writeFile("./main.py", code, (err) => {
//     if (err) {
//         console.log("Error : ", err)
//     }
//     else {
//         // console.log("File written successfully")
//         exec('python main.py', (err, stdout, stdin) => {
//             console.log(stdout)
//         });
//     }
// })


// exec('python main.py 2 10 20', (err, stdout, stdin) => {
//     console.log(stdout)
// });