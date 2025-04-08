import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import { use, useEffect, useState } from 'react'
import { NumberTicker } from './components/magicui/number-ticker'
import LuxeMoment from './components/LuxeMoment'
import Studio from './pages/Studio'

function App() {

  const [loading, setLoading] = useState(false);
  const [introComplete, setIntroComplete] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500); // Adjust the delay as needed

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
     {!introComplete && <LuxeMoment onFinish={() => setIntroComplete(true)} />}
     {introComplete && 
    <MainLayout>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/studio/:carId" element={<Studio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </MainLayout>
    }
    </>
  )
}

export default App
