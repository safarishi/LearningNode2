// connecting to the unix socket and printing out received data
var net = require('net');
var os = require('os');

var client = new net.Socket();
client.setEncoding('utf8');

var unixSocket = os.homedir() + '/node.sock';

// connect to server
client.connect (unixSocket, function () {
   console.log('connected to server');
   client.write('Who needs a browser to communicate?');
});

// when receive data, send to server
process.stdin.on('data', function (data) {
   client.write(data);
});

// when receive data back, print to console
client.on('data',function(data) {
   console.log(data);
});

// when server closed
client.on('close',function() {
   console.log('connection is closed');
});

client.on('error', (err) => {
    console.log(err);
    process.exit();
});
