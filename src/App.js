import React, {useEffect, useState} from 'react';
import './App.css';
import Card from "./components/card"
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import { Route, Routes, Link } from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";


function App(){

    return(
           <Router>
               <Routes>
                   <Route path="/" element={<Login />} />
                   <Route exact path="/home" element={<HomePage />} />
               </Routes>
           </Router>
    );
}

export default App;
