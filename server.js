var express = require('express');
var app = express();
var http = require('http').createServer(app);

var io = require("socket.io")(http);


console.log('Socket server is running');


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

io.sockets.on('connection', function(socket) {
    console.log('a user connected');

    socket.on('disconnect', function() {
        console.log('user disconnected');
    });

    socket.on('message', function(message) {
        console.log('message: ' + message);
    });

})


http.listen(3000, function(){
    console.log("listening on *:3000");
});


