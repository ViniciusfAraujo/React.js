import './Menu.css'
import React from "react";

function Menu(props){
   return(
        <aside className="Menu">
             <nav>
               <ul>
                    <li><a href="/">Início</a></li>
               </ul>
               <ul>
                    <li><a href="/">Sobre</a></li>
               </ul>
             </nav>
        </aside>
   ) 
}

export default Menu