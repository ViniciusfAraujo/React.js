import './Mega.css';
import React, { useState } from "react";

function Mega(props){

    function gerarNumerosNaoContido(min, max, array){
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
        return array.include(aleatorio) ? 
            gerarNumerosNaoContido(min, max, array) : aleatorio
    }

    function gerarNumeros(qtde){
        const numeros = Array(qtde)
        .fill(0)
        .reduce((nums) => {
            const novoNumero = gerarNumerosNaoContido(1, 60, nums)
            return [ ...nums, novoNumero]
        }, [])
        .sort((n1, n2) => n1 - n2)

        return numeros
    }

    const [qtde, setQtde] = useState(props.qtde || 6)
    const numeroInicial = Array(qtde).fill(0) 
    const [numero, setNumero] =useState(numeroInicial)

    return(
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numero.join(" ")}</h3>
            <div>
                <label> Qtde Números:</label>
                <input type="number" value={qtde} onChange={e => setQtde(+e.target.value)} />
            </div>
            <button onClick={_ => setNumero(gerarNumeros(qtde))}>
                Gerar Números
            </button>
        </div>
    )

}

export default Mega