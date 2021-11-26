import React, {useEffect, useState} from 'react';
import './App.css';
import Card from "./components/card"
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import { HashRouter,Route, Routes, Link } from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";


function App(){

    return(
           <HashRouter>
               <Routes>
                   <Route exact path="/" element={<Login />} />
                   <Route path="/home" element={<HomePage />} />
               </Routes>
           </HashRouter>
    );
}

export default App;
