import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { MainContext } from './contexts/MainContext.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainContext>
      <App />
    </MainContext>
  </React.StrictMode>,
)
