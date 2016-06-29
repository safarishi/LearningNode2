'use strict';

// a datagram client
const dgram = require('dgram');

const client = dgram.createSocket('udp4');

process.stdin.on('data', (data) => {
   client.send(data, 0, data.length, 8124, 'localhost', (err, bytes) => {
      if (err) {
        console.error('error: ' + err);
      }
      else {
        console.log('successful');
      }
   });
});
