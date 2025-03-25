import Routings from './routing/Routings'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routings />
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
