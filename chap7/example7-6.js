'use strict';

// a udp socket server
const dgram = require('dgram');

const server = dgram.createSocket('udp4');

server.on ('message', (msg, rinfo) => {
  let info = [
    'Message: ', msg, 'from ',
    rinfo.address, ':', rinfo.port,
  ].join('');
  console.log(info);
});

server.bind(8124);
