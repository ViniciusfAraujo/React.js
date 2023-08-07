import React from "react"
import DiretaFilho from "./DiretaFilho"

function DiretaPai(props){
    return(
        <div>
            <DiretaFilho nome='Vinicius' idade={23} nerd={true}/>
            <DiretaFilho nome='AnaPaula' idade={30} nerd={false}/>
        </div>
    )
}
export default DiretaPai