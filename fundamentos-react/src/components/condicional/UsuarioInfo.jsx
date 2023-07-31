import React from "react";
import If from "../If";

function UsuarioInfo(props){
    const usuario = props.usuario || {}
    return(
        <div>
            <If test={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>!
            </If>
        </div>
    )
}
export default UsuarioInfo