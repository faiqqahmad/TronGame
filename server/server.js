const express = require('express')
const app = express()
const cors = require('cors')
// app.use(cors())
const server = require('http').createServer(app)
const WebSocket = require('ws')
const { WebSocketServer } = require('ws')


const wss = new WebSocket.Server( {server: server})
const w11 = new WebSocketServer()


wss.on('connection', function connection(ws) { // this is for when a new client connects to the server
    console.log('A new client has connected')//
    ws.send('Welcome new client!');//

wss.on('message', function message(data) { // this is for when the server recieves a new message from the client
    console.log('received: %s', data);
    wss.send("Got your message its: " + data)
    });
  
    
  }); //   
  

app.get("/api", (req, res) => {
    res.json({ "users" : ["userOne", "userTwo", "userThree"]})
})

app.listen(3000, () => {console.log("Server started on port 3000")})