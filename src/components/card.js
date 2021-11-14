import React, {useState, useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import '../App.css';
import DataModel from '../DataModel';
import data from "bootstrap/js/src/dom/data";
import {collection, onSnapshot, query} from "firebase/firestore";
import {db} from "../Secrets";



function Cards(){


    const dataModel = new DataModel();

    const [id, setID] = useState(dataModel.getItem())
    return(
        <div className="card">
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        {console.log(id)}
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    )
}
export default Cards;