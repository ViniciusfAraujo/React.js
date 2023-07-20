import './index.css'
import {createRoot} from 'react-dom/client'
import React from 'react'
//Componentes.
import App from './components/pages/App'

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
    <App/>,
)