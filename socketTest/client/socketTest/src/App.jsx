
import io from 'socket.io-client'
import { useEffect } from "react"

const socket = io.connect("http://localhost:5174")

function App() {
  
  const sendMessage = () => {
    socket.emit("send_message", { message: "Hello"})
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      alert(data.message)
    })
  },[socket])

  return (
    <>
    <div className="App">
      <input placeholder="Message..."/>
      <button onClick={sendMessage}> send button</button>  
    </div>
    </>
  )
}

export default App
