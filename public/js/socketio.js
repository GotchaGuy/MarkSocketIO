var socket;
var usernameColor = white;
var username = prompt('Please pick your username');
var output = document.getElementById('output');
var message = document.getElementById('message');


console.log(username);
if (username && username !== "") {
    socket = io.connect('http://localhost:3000')
    socket.emit('userJoined', username);
    message.focus;
    
            socket.on('newUser', function(data) {
               output.innerHTML += "<p class='newUserMessage' >" + data + ' has joined the chat. </p>';
            })
        
            function keyboardSend(event) {
                
                if (message.value.indexOf('/') === 0) {
                    var spaceIndex = message.value.indexOf(' ');
                    if (spaceIndex !== -1) {
                        var command = message.value.substring(1, spaceIndex); //first is the index of the starting letter, second is the length(not the index)
                        var paramater = message.value.substring(spaceindex + 1, message.value.length);
                        if (command === 'color') {
                            usernameColor = parameter;
                        }
                        message.value = '';
                        message.focus;
                    }
                } else {
                    sendMessage();
                }
            }
        
            function sendMessage(event) {
                if (event.key == "Enter") {
                    socket.emit('globalMessage', {user: username.value, msg: message.value, color: usernameColor});
                   
                    message.value = '';
                    message.focus;
                }
            }
           
            
        socket.on('user.Text', function(data) {
            output.innerHTML +=  "<p class='message' ><strong style='color:" + data.color + "'>" + data.user + "</strong>: " + data.msg + "</p>";
        })
    } else {
        output.innerHTML = "<p class='error'>Please refresh and specify appropriate username. </p>"
    }   












