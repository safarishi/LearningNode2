// tcp server bound to a unix socket
var net = require('net');
var fs = require('fs');
var os = require('os');

const unixSocket = os.homedir() + '/node.sock';

var server = net.createServer(function(conn) {
   console.log('connected');

   conn.on('data', function (data) {
      conn.write('Repeating: ' + data);
   });

   conn.on('close', function() {
        console.log('client closed connection');
   });

}).listen(unixSocket);

server.on('listening', function() {
    console.log('listening on ' + unixSocket);
});

// if exit and restart server, must unlink socket
server.on('error',function(err) {
   if (err.code == 'EADDRINUSE') {
      fs.unlink(unixSocket, function() {
          server.listen(unixSocket);
      });
   } else {
      console.log(err);
   }
});

process.on('uncaughtException', function (err) {
    console.log(err);
});
