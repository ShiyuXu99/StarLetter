import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Modal, Button, Form} from 'react-bootstrap';

import machineGif from './image/machine.gif';
import machinePng from './image/machine.png';
import planet from './image/planet.gif'
import Cards from './components/card'
import bottle from './image/bottle.png'
import ModalField from './components/Modal'
import PrevCards from "./components/PrevCards";
import {getDataModel} from './DataModel';
import {collection, onSnapshot, query} from "firebase/firestore";
import { db } from './Secrets';


function App(){

    const [image, setImage] = useState(true);
    const [showCard, setShowCard] = useState(false);
    const [showPrevCard,setShowPrevCard] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleCloseCard= () =>{
        setTimeout(()=>{
            setShowCard(false)
        }, 60000)
    }

    const instantlyCloseCard=()=>{
        setShowCard(false);
    }

    const handlePrevCard=()=>{
        setShowPrevCard(true)
    }

    const handleClosePrevCard = ()=>{
        setShowPrevCard(false)
    }

    const handleImageClick = () =>{
        setImage(false)

        setTimeout(()=>{
            setImage(true)
            setShowCard(true)
            handleCloseCard();
        }, 6000)
    }


    return(
        <div className="container">
            <div className="C1">
                <div className="C1container">
                    <div className="buttonContainer">
                    <button className= "machineBack">
                        <img src={planet}
                             onClick={handleShow}
                             className="planet"
                        />
                    </button>
                    </div>
                    <div className="buttonContainer">
                    <button className= "machineBack">
                        <img src={bottle}
                             onClick={handlePrevCard}
                             className="planet"
                        />
                    </button>
                    </div>
                </div>

            </div>
            <div className="C2">
                <div className="cardBox">
                    { showPrevCard ? <PrevCards close = {handleClosePrevCard}/> : null }
                    { showCard ? <Cards instantlyCloseCard = {instantlyCloseCard}/> : null }
                </div>
            </div>
            <div className="C3">
                <button className= "machineBack">
                    <img src={image? machinePng: machineGif}
                         onClick={handleImageClick}
                         className="machine" alt="Logo" />
                </button>
            </div>

            <ModalField
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            />

        </div>
    );
}

export default App;
