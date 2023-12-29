import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './views/Home'
import Lista1 from './views/Lista1'
import Lista2 from './views/Lista2'
import NotFound from './views/NotFound'

import Navegador from './components/Navbar'

import Pie from './components/Footer'


function App() {

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Navegador />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bebida1" element={<Lista1 />} />
            <Route path="/bebida2" element={<Lista2 />} />
            <Route path='*' element={<NotFound />} />
          </Routes>

          <Pie />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
