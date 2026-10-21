import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// El sitio es de una sola página: si se abre con otra ruta, se normaliza a la raíz conservando la sección.
if (window.location.pathname !== '/') {
  history.replaceState(null, '', `/${window.location.hash}`)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
