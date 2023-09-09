const express = require('express')
const cors = require('cors')
const WebSocket = require('ws')

const app = express()

app.use(cors())

// const wss = new WebSocket.Server(app)

// wss.on('connection', function connection(ws) { // this is for when a new client connects to the server
//     console.log('A new client has connected')//
//     ws.send('Welcome new client!');//

//     ws.on('message', function message(data) { // this is for when the server recieves a new message from the client
//       console.log('received: %s', data);
//       ws.send("Got your message its: " + data)
//     });
  
    
//   }); //   
  

app.get("/api", (req, res) => {
    res.json({ "users" : ["userOne", "userTwo", "userThree"]})
})

app.listen(4000, () => {console.log("Server started on port 4000")})