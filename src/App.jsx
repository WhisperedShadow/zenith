import Routings from './routing/Routings'
import { BrowserRouter } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import ChatBot from './Components/ChatBot/ChatBot'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Analytics />
        <Navbar />
        <ChatBot />
        <Routings />
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
