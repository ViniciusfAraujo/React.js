import React from "react"

function IndiretaFilho(props){
    const gerarIdade = () => parseInt(Math.random() * (20)) + 50 
    const seNerd = () => Math.random() > 0.5  

    return(
        <div>
             <div>Filho</div>
             <button onClick={(e) => props.quandoClicar('Vinicius', gerarIdade(), seNerd())}>
                Fornecer Informações
            </button>
        </div>
    )
}
export default IndiretaFilho