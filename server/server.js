const express = require('express');
const app = express();
const http = require('http');
const morgan = require("morgan");
const moment = require('moment');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

require("./connection.js");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

const User = require("./models/users");
const Msg = require("./models/messages");

let usersConnect = []
let messages = []

Msg.find((err, result) => {
  if(err) throw err
  messages = result
})

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on("loginUser", async (username) => {
    const userFind = await User.findOne({ username })
    if(!userFind) {
      const newUser = new User({
        username
      })
      newUser.save((err, result) => {
        if (err) throw err
        usersConnect.push(result)
        socket.emit("userSelf", result)
        socket.broadcast.emit("userJustConnected", result)
      })
    }
    usersConnect.push(userFind)

    socket.emit("userSelf", userFind)
    socket.broadcast.emit("userJustConnected", userFind)

    socket.on("sendMessage", ({ user, message}) => {
      console.log("usersend", user)
      console.log("messagesend", message)
      let messageUser = new Msg({
        message,
        username: user.username,
        date: moment().format("dd-mm-yyyy,  HH:MM"),
        userId: user._id
      })
      messageUser.save((err, result) => {
        if(err) throw err
        io.emit("newMessage", result)
      })
    })

    socket.emit("listUsers", usersConnect)
    socket.emit("listMessages", messages)
  })

  
});

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});