import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Index from './pages/Index'

function App() {
  

  return (
        <>
          <nav>
            <NavBar />
          </nav>
          <div>
            <Routes>
              <Route path='/' element={<Index />}/>
              <Route path='/pg1' element={<Page1 />}/>
              <Route path='/pg2' element={<Page2 />}/>
              <Route path='/pg3' element={<Page3 />}/>
            </Routes>
          </div>

        </>
  )
}

export default App
