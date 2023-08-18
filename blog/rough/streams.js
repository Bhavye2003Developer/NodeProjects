const fs = require('fs')

const readStream = fs.createReadStream('./data.txt')

readStream.on('data', function (chunk) {
    console.log("------------------------- New Chunk -------------------------")
    console.log(chunk)
})