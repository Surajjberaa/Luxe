import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'

import './App.css'; // Ensure the CSS file is imported to apply styles
import { ThemeProvider } from './contexts/ThemeContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider>
        <App />
    </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
