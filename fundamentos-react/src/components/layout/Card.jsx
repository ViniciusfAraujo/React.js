import './Card.css'
import React from "react";

function Card(props){

    const cardStyle ={
        backgroundColor: props.color || '#000', 
        borderColor: props.color || '#000',
    }

    return( 
        <div className='card' style={cardStyle}>
            <div className='title'>{props.titulo}</div>
            <div className='content'>
                {props.children}
            </div>
        </div>
    )
}

export default Card