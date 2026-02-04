import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './Components/LandingPage'
import React from 'react'
import { BrowserRouter, Routes, Route, createBrowserRouter } from 'react-router-dom'
import TopBar from './Dashboard/TopBar'
import Dashboard from './Dashboard/Dashboard'
import Login from './Pages/Login'
import Signup from './Pages/SignUp'

function App({children}) {

  return (
   <div>

    <main>
      {/* <TopBar /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
    </main>
   </div>
  )
}

export default App
