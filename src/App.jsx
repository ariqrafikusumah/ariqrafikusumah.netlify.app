import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Beranda from './pages/Beranda'
import NotFound from './pages/NotFound'
import Produk from './pages/Produk'
import Tentang from './pages/Tentang'

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Beranda />} />
          <Route path='/Tentang' element={<Tentang />} />
          <Route path='/Produk' element={<Produk />} />
          <Route path='/NotFound' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}
