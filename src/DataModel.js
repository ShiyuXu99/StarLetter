import { initializeApp, getApps } from 'firebase/app';
import {
    initializeFirestore, collection, getDocs, query,
    doc, addDoc, getDoc, onSnapshot, orderBy, limit
} from "firebase/firestore";
import { db } from './Secrets';
import {useEffect, useState} from "react";
import App from "./App";


let nextKey = 1;
function getNextKey() {
    return '' + nextKey++;
}

function DataModel(){

    const [id, setID] = useState('');
    const [note, setNote] = useState('');
    const [text, setText] = useState('');


    useEffect(()=>{
        const q = query(collection(db, 'Notes'));
        onSnapshot(q, (qSnap) => {
            let newItem = [];
            qSnap.docs.forEach((docSnap)=>{
                let item = docSnap.data();
                item.key = docSnap.id;
                newItem.push(item);
            });
            setNote(newItem);
            console.log(newItem)
        });
    }, []);

    async function addItem(item) {
        item.key = getNextKey();
        const collRef = collection(db, 'ListItems');
        let docRef = await addDoc(collRef, item);
    }

    this.getItem = async ()=> {
        let item =  note[0]
        return item;
    }

    // return{
    //     getItem: getItem,
    // };

}

export default DataModel;


