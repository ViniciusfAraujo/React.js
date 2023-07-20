import React from "react";

//Componentes.
import Primeiro from './Primeiro';
import ComParametro from './ComParametro';
import Fragmentos from './Fragmentos';
import Aleatorio from "./Aleatorio";

function App(props){
    return(
        <div id='app'>
            <h1>Fundamentos React.js</h1>
            <hr />
            <Aleatorio min={1} max={60}/>
            <hr />
            <Fragmentos/>
            <hr />
            <ComParametro 
            titulo='Situação do aluno' //Parametros 
            aluno='Vinicius'
            nota={8.9}/>
            <hr />
            <Primeiro/>
        </div>
    )    
}        
export default App