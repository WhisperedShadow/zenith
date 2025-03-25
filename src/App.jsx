import Routings from './routing/Routings'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routings />
      </BrowserRouter>
    </>
  )
}

export default App
