import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Me from './components/Me';
import Menu from './components/Menu';
import Product from './components/Product';
import NotFound from './components/NotFound';
import SearchForm from './components/SearchForm';
import './components/css/menu.css'
import Search from './components/Search';




function App() {
  

  return (    
      <div>
        
        <BrowserRouter>
        {/*A partir daqui, os componentes serão
        renderizados dentro destas tags. */}
        <Menu />
        <SearchForm />
          <Routes>
            <Route path='*' element={<NotFound />}/>
            <Route path='/search' element={<Search />}/>
            <Route path='/sobre' element={<Navigate to='/about'/>}/>
            {/*Redireciuonamento de rotas que possam ter mudado. */}
            <Route exact path='/' element={<Home />} />
            <Route path='/about/me' element={<Me />}/>
            {/* Rotas aninhadas */}
            <Route path='/about' element={<About />}/>
            {/*Rota dinâmica */}
            <Route path='/products/:id' element={<Product />}/>
            {/* ID também pode ser acessado na nested route usando o 
                hook useParams. */}
          </Routes>
        </BrowserRouter>
      </div>     
      
  )
}

export default App
