import React, { cloneElement } from "react";

function Familia(props){
    return(
        <div>
            {
                props.children.map((el, i) => {
                    return cloneElement(el, {...props, key:i})
                }) 
            }
        </div>
    )
}

export default Familia