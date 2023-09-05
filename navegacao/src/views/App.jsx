import React from "react";
import { BrowserRouter } from 'react-router-dom'

import Content from '../components/layout/Content';
import Menu from '../components/layout/Meun';
import './App.css'

function App(props){
   return(
        <div className="App">
             <Menu/>
             <Content/>
        </div>
   ) 
}

export default App