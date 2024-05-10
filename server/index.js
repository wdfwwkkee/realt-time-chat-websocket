const express = require("express")
const app = express()
const PORT = 5000

const http = require("http").Server(app)
const cors = require("cors")
const socketIO = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:5173",
  },
})

app.get("api", (req, res) => {
  res.json({
    message: "Hello from server",
  })
})


const users = [];

socketIO.on("connection", (socket) => {
  console.log(`${socket.id} user connected`)
  socket.on('message', (data)=> {
    socketIO.emit('responce', data)
  })
  socket.on('typing', (data) => {
    socket.broadcast.emit('responceTyping', data)
  })
  socket.on('newUser', (data) => {
    users.push(data)
    socketIO.emit('responceNewUser', users)
  })
  socket.on("disconnect", () => {
    console.log(`${socket.id} user disconnected`)
  })
})

http.listen(PORT, () => {
  console.log(`Server working on ${PORT} port `)
})
