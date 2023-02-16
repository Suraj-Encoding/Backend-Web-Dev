// # Basic console log
// console.log("Hello World");

// # First Server
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;

//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World';)
//   res.end('Hello World this is Suraj Dalvi');

  res.setHeader('Content-Type', 'text/html');
//   res.end(`HTML CODE`);
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Suraj</title>
  </head>
  <body>
       <h1>
          Hello World
       </h1>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});