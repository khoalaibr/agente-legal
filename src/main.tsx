import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // <-- Importa el Router
import App from './App.tsx'
import './styles/index.css' // <-- Asegúrate que la ruta al CSS es correcta

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Envuelve la App con BrowserRouter para habilitar el enrutamiento */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)