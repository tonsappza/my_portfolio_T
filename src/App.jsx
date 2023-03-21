import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)
  return (
    <>

      <div>
        <Navbar />
      </div>
      <div className='LayoutOutlet' style={{ height: '100%', width: '100%' }}>
        <Outlet />
      </div>
    </>
  )
}

export default App;
