import './index.css'
import {createRoot} from 'react-dom/client'
import React from 'react'
//Componentes.
import App from './views/App'

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
    <React.StrictMode>
      <App/>   
    </React.StrictMode>
)