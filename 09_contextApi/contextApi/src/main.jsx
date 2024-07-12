import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { CounterContextProvider } from './context/CounterContext.jsx'
import { TitleColorContextProvider } from './context/TltleColorContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <React.StrictMode>
        <CounterContextProvider>
          <TitleColorContextProvider>
            <App />
          </TitleColorContextProvider>
        </CounterContextProvider>       
      </React.StrictMode>
    </BrowserRouter>
  ,
)
