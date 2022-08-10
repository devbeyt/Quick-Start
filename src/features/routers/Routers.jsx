import React from 'react'
import Home from '../pages/home/Home'
import { Routes, Route } from 'react-router-dom'

function Routers() {
  return (<Routes>
          <Route path="/" element={<Home />} />
        </Routes>)
}

export default Routers