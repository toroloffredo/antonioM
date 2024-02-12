import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ErrorPage from './pages/ErrorPage'

function App() {

  return (
    <>
      <Routes>
       <Route path="/" element={<HomePage />}/>
       <Route path="/about" element={<AboutPage />}/>
       <Route path="/contact" element={<ContactPage />}/>    
       <Route path="*" element={<ErrorPage />}/>
      </Routes>
      
    </>
  )
}

export default App
