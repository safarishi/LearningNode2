'use strict';

// creating a very simple https server
const fs = require('fs');
const https = require('https');

let options = {
  key: fs.readFileSync('key-cert/site.key').toString(),
  cert: fs.readFileSync('key-cert/final.crt').toString(),
};

const server = https.createServer(options, (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello Secure World<br />');
}).listen(443);

server.on('error', (err) => {
  console.log(err);
});
