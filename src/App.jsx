import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import FarmManagement from './pages/FarmManagement'
import CropInfo from './pages/CropInfo'
import Weather from './pages/Weather'
import Market from './pages/Market'
import Profile from './pages/Profile'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="farm" element={<FarmManagement />} />
          <Route path="crops" element={<CropInfo />} />
          <Route path="weather" element={<Weather />} />
          <Route path="market" element={<Market />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App