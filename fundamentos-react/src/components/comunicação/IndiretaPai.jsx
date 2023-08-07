import React from "react"
import IndiretaFilho from "./IndiretaFilho"

function IndiretaPai(props){
    let nome = '?'
    let idade = 0
    let nerd = false 
    function fornecerInformacao(nomeParam, idadeParam, nerdParam){
        nome = nomeParam
        idade = idadeParam
        nerd = nerdParam

        console.log(nomeParam, idadeParam, nerdParam);
    }

    return(
        <div>
            <span>{nome} </span>
            <span> {idade}</span>
            <span> {nerd ? 'Verdadeiro' : 'Falso'}</span>
            <IndiretaFilho quandoClicar={fornecerInformacao}/>
        </div>
    )
}
export default IndiretaPai