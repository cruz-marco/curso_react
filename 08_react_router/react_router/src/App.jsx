import { useState } from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Me from './components/Me';
import Menu from './components/Menu';
import './components/css/menu.css'



function App() {
  const [count, setCount] = useState(0)

  return (    
      <div>
        
        <BrowserRouter>
        <Menu />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />}>
              <Route path='me' element={<Me />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>     
      
  )
}

export default App
