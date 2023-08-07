import './App.css'
import React from "react";

//Componentes.
import Primeiro from './pages/Primeiro';
import ComParametro from './pages/ComParametro';
import Fragmentos from './pages/Fragmentos';
import Aleatorio from "./pages/Aleatorio";
import Card from "./layout/Card";
import Familia from './pages/Familia';
import FamiliaMembro from './pages/FamiliaMembro';
import ListaAluno from './repetição/ListaAlunos';
import TabelasProdutos from './repetição/TabelasProdutos';
import ParOuImpar from './condicional/ParOuImpar';
import DiretaPai from './comunicação/DiretaPai';
import IndiretaPai from './comunicação/IndiretaPai';


function App(props){
    return(
        <div className='app'>
            <h1>Fundamentos React.js</h1>
            
            <div className="cards" >
                <Card titulo='#10 - Comunicação Indireta'       color='#E61105'>
                    <IndiretaPai/>
                </Card>
                <Card titulo='#09 - Comunicação Direta'       color='#59382C'>
                    <DiretaPai/>
                </Card>
                <Card titulo='#08 - Renderização Condicional' color='#579936'>
                    <ParOuImpar numero={21}/>
                </Card>
                <Card titulo='#07 - Tabela de produtos' color='#040F0F'>
                    <TabelasProdutos/>
                </Card>
                <Card titulo='#06 - Repetição' color='#0081A7'>
                    <ListaAluno/>
                </Card>
                <Card titulo='#05 - Componentes com Filhos' color='#FFD700'>
                    <Familia sobrenome='Araujo'>
                        <FamiliaMembro nome='Vinicius'/>
                        <FamiliaMembro nome='Milena'/>
                        <FamiliaMembro nome='Ana Paula'/>
                    </Familia>
                </Card>

                <Card titulo='#04 - Exemplo de Cards' color='#080'>
                    <Aleatorio min={1} max={60}/>
                </Card>
                <Card titulo='#03 - Fragmentos' color='#BDB76B'>
                    <Fragmentos/>
                </Card>
                <Card titulo='#02 - Com parâmetro' color='#008B8B'>
                    <ComParametro
                    titulo='Situação do aluno' //Parametros
                    aluno='Vinicius'
                    nota={8.9}/>
                </Card>
                <Card titulo='#01 - Primeiro componente' color='#800000'>
                    <Primeiro/>
                </Card>
            </div>
        </div>
    )    
}        
export default App