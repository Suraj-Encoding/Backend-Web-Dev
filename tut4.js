// # Creating Server 
// # Serving HTML Files using Node.Js

// # Method-1:
const http = require('http');
const fs = require('fs');
const fileContent = fs.readFileSync('Frontpage.html');

const server = http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/html' });
    res.end(fileContent);
});

server.listen(8000, '127.0.0.1', () => {
    console.log("Listening on port 8000...");
});


// # Method-2:
// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const fs = require('fs');
// const fileContent = fs.readFileSync('Frontpage.html');

// const server = http.createServer((req, res) => {

//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end(fileContent);
// });

// server.listen(port, hostname, () => {
//   console.log("Listening on port ",port);
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


