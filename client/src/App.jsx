import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import { useEffect, useState } from 'react'
import { NumberTicker } from './components/magicui/number-ticker'

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return (
      <div className='flex items-center justify-center h-screen'>

      <NumberTicker
      value={100}
      className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white"
      />
      </div>
    );
  }

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
