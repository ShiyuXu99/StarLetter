import React, {useEffect, useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import machineGif from '../image/machine.gif';
import machinePng from '../image/machine.png';
import planet from '../image/planet.gif'
import Cards from '../components/card'
import bottle from '../image/bottle.png'
import Logout from '../image/logout.jpg'
import base from '../image/base.jpg'

import ModalField from '../components/Modal'
import PrevCards from "../components/PrevCards";
import { logout } from "../DataModel";
import {useNavigate} from 'react-router-dom';


function HomePage(){
    const [image, setImage] = useState(true);
    const [showCard, setShowCard] = useState(false);
    const [showPrevCard,setShowPrevCard] = useState(false);
    const [logoutImage,setLogoutImage] = useState(false)

    const [show, setShow] = useState(false);
    const navigate = useNavigate();

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

    const handleLogout= async()=>{
        await logout();
        navigate('/')
    }


    return(
        <div className="contain">
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
            <div className="C4">
                <button className= "logoutDiv"
                        onMouseEnter={()=> setLogoutImage(true)}
                        onMouseLeave={()=> setLogoutImage(false)}
                >
                    <img src={logoutImage?Logout:base}
                         onClick={handleLogout}
                         className="logout"
                    />
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

export default HomePage;