// const http = require('http');
// const fs = require('fs');
// const _ = require('lodash');

// const server = http.createServer((req, res) => {
//     console.log(`Request made to: ${req.url}`);
//     const num = _.random(0, 20);

//     let filePath = './html' + (req.url === '/' ? '/index.html' : req.url + '.html');

//     fs.readFile(filePath, (err, data) => {
//         if (err) {
//             console.log(err);
//             res.writeHead(404, { 'Content-Type': 'text/html' });
//             res.end("<h1>404 Page Not Found</h1>")
//         } else {
//             console.log(`The random number is ${num}`)
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(data);
//         }
//     });
// });

// server.listen(3000, 'localhost', () => {
//     console.log('Listening for requests on port 3000');
// });



