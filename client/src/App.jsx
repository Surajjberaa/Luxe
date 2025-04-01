import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Experience from './pages/Experience'
import Contact from './pages/Contact'

function App() {

  return (
    <>
    <MainLayout>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </MainLayout>
    </>
  )
}

export default App
