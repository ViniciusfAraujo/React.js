import React from "react"

function Aleatorio(props){
    const {min, max} = props
    const aleatorio = parseInt(Math.random() * (max - min) + min)
    return(
        <div>
            <h2>Valores Aleatório</h2>
            <p><strong>Valor Mínimo: </strong> {min}</p>
            <p><strong>Valor Máximo: </strong> {max}</p>
            <p><strong>Valor Escolhido: </strong> {aleatorio}</p>
        </div>
    )

}
export default Aleatorio