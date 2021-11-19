import { initializeApp, getApps } from 'firebase/app';
import {
    initializeFirestore, collection, getDocs, query,
    doc, addDoc, setDoc,getDoc, onSnapshot, orderBy, limit
} from "firebase/firestore";
import { db } from './Secrets';
import {useEffect, useState} from "react";
import App from "./App";



    export async function getData(){
        const q = query(collection(db, "Notes"));
        const querySnapshot = await getDocs(q);
        let data = []
        querySnapshot.forEach((doc) => {
            let temp = doc.data();
            temp['id'] = doc.id;
            if(!temp.readStatus){
                data.push(temp);
            }
        });
        return data;
    }

export async function getPrevData(){
    const q = query(collection(db, "Notes"));
    const querySnapshot = await getDocs(q);
    let data = []
    querySnapshot.forEach((doc) => {
        let temp = doc.data();
        temp['id'] = doc.id;
        if(temp.readStatus){
            data.push(temp);
        }
    });
    console.log(data)
    return data;
}

    export async function addItem(item) {
        const collRef = collection(db, 'Notes');
        let docRef = await addDoc(collRef, item);
    }

export async function handleUpdate(id, item) {
    await setDoc(doc(db, "Notes", id), {
        'header': item.header,
        'text': item.text,
        'readStatus': true
    });
}






