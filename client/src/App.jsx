import { ThemeProvider } from "@emotion/react"
import LandingPage from "./LandingPage"
import PlayScreenPage from "./PlayScreenPage"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import React, { useEffect, useState } from 'react'


export default function App() {


  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:4000/api",  {
      header: {
        'If-None-Match': "*",
        'Cache-Control': 'no-cache'
      }
    }).then(
      response => response.json()
    ).then(
      data => { 
        setBackendData(data)
      }
    )
  }, [])

  return <div>
    {( typeof backendData.users == 'undefined' ? (
      <p>Loading...</p>
    ) : (
      backendData.users.map((user,i) =>  (
        <p key={i}> {user} </p>
      ))
    ))}
  </div>
}
