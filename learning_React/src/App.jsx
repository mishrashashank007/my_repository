import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Project from "./pages/projects";
import Agence from "./pages/Agence";
import Staircase from './components/Staircase';

function App() {
  return (
    <div className='overflow-x-hidden text-white'>
      <Staircase />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />

      </Routes>
    </div>
  )
}

export default App;