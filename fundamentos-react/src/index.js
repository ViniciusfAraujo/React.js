import './index.css'
import {createRoot} from 'react-dom/client'
import React from 'react'

//Componentes.
import Primeiro from './components/pages/Primeiro'
import Comparametro from './components/pages/Comparametro'
import Fragmentos from './components/pages/Fragmentos'

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
    <div id='app'>
        <Primeiro/>
        <Comparametro 
        titulo='Situação do aluno' //Parametros 
        aluno='Vinicius'
        nota={6.7}/>
        <Fragmentos/>
    </div>
)