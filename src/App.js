import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Modal, Button } from 'react-bootstrap';

import machineGif from './image/machine.gif';
import machinePng from './image/machine.png';
import planet from './image/planet.gif'
import Cards from './components/card'
import {getDataModel} from './DataModel';



function App(){

    const [image, setImage] = useState(true);
    const [showCard, setShowCard] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleImageClick = () =>{
        setImage(false)

        setTimeout(()=>{
            setImage(true)
            setShowCard(true)
            handleCloseCard();
        }, 1000)
    }

    const handleCloseCard= () =>{
        setTimeout(()=>{
            setShowCard(false)
        }, 1000)
    }


    return(
        <div className="container">
            <div className="C1">
                <div className="C1container">
                    <button className= "machineBack">
                        <img src={planet}
                             onClick={handleShow}
                             className="planet"
                        />
                    </button>
                </div>
            </div>
            <div className="C2">
                <div className="cardBox">
                    { showCard ? <Cards/> : null }
                </div>
            </div>
            <div className="C3">
                <button className= "machineBack">
                    <img src={image? machinePng: machineGif}
                         onClick={handleImageClick}
                         className="machine" alt="Logo" />
                </button>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Don't even try to press
                    escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}

export default App;
