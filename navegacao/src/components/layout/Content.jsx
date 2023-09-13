import './Content.css'
import React from "react";
import { Routes, Route, Router } from "react-router-dom";

import Home from '../../views/examples/Home'
import About from '../../views/examples/About'
import Param from '../../views/examples/Param';
import NotFound from '../../views/examples/NotFound';


const Content = props => {
          <Router>
               <main className="Content">
                    <Routes>
                         <Route exact path='/about' Component={<About/>}/>
                         <Route exact path='/param/:id' Component={<Param/>}/>
                         <Route exact path='/' Component={<Home/>}/>
                         <Route exact path='*' Component={<NotFound/>}/>
                    </Routes>
               </main>
          </Router>
}

export default Content