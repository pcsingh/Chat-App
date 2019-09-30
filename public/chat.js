$(function() {
    var socket = io.connect('http://localhost:3000')
    var message = $("#message")
    var username = $("#username")
    var send_message = $("#send_message")
    var send_username = $("#send_username")
    var chatroom = $("#chatroom")

    send_username.click(() => {
        console.log(username.val())
        socket.emit('change_username', { username: username.val() })
    })
    send_message.click(() => {
        console.log(message.val())
        socket.emit('new_message', { message: message.val() })

    })
    socket.on('new_message', (data) => {
        chatroom.append("<p class='message'>" + data.username + ' : ' + data.message + "</p>")
    })
})