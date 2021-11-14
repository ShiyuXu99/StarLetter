import React, {useState, useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import '../App.css';
import {getDataModel} from '../DataModel';
import { initializeApp, getApps } from 'firebase/app';
import {
    initializeFirestore, collection, getDocs, query,
    doc, addDoc, getDoc, onSnapshot, orderBy, limit
} from "firebase/firestore";
import { db } from '../Secrets';


function Cards(){
    const dataModel = getDataModel();
    const [note, setNote] = useState('');


    useEffect(()=>{
        const q = query(collection(db, 'Notes'));
        onSnapshot(q, (qSnap) => {
            let newItem = [];
            qSnap.docs.forEach((docSnap)=>{
                let item = docSnap.data();
                item.key = docSnap.id;
                if(item.key === '1'){
                    setNote(item);
                }
            });
        });
    }, []);


    return(
        <div className="card">
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        {note.text}
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    )
}
export default Cards;