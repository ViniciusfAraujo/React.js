import React from "react"

function Comparametro(props){ //props => parametro
    //console.log(props);
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
    const intNota = Math.ceil(props.nota)
    return(
        <div>
            <h3>{props.titulo}</h3>
            <p><strong>{props.aluno}</strong> tem nota {intNota} e está <strong>{status}</strong></p>
            
        </div>
    )
}
export default Comparametro