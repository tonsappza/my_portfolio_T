import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div style={{ height: '100vh', backgroundColor: '#FFCCCC' }}>
        <Navbar />
      </div>
    </>
  )
}

export default App
