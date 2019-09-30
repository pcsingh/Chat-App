const express = require('express')
const app = express()

//Default template engine ejs
app.set('view engine', 'ejs')

//middlewares
app.use(express.static('public'))


//routes
app.get('/', (req, res) => {
    res.render('index')
})






//Listen on port 3000
server = app.listen(3000)
const io = require("socket.io")(server)
    //listen on every connection
io.on('connect', (socket) => {
    console.log('New user connected')

    socket.username = "Anonymous"
    socket.on('change_username', (data) => {
        socket.username = data.username
        console.log(data)

    })
    socket.on('new_message', (data) => {
        io.sockets.emit('new_message', { message: data.message, username: socket.username });
        console.log(data.message);
    })

})