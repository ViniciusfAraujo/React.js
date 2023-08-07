import React from "react"

function IndiretaFilho(props){
    return(
        <div>
             <div>Filho</div>
             <button onClick={(e) => props.quandoClicar('Vinicius', 23, true)}>
                Fornecer Informações
            </button>
        </div>
    )
}
export default IndiretaFilho