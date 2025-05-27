import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/pages/home/Home'
import Crew from './assets/pages/crew/Crew'
import Tech from './assets/pages/tech/Tech'
import Destination from './assets/pages/destination/Destination'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/tech" element={<Tech />} />
      </Routes>
    </>
  )
}

export default App
