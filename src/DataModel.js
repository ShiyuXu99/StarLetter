import { initializeApp } from "firebase/app";
import React, {useEffect, useState} from 'react';
import {
    initializeFirestore, collection, getDocs, query,
    doc, addDoc, setDoc, getDoc, where
} from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

import firebaseConfig from "./Secrets"


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = initializeFirestore(app, {
    useFetchStreams: false
});


// export function signup(email, password) {
//     return createUserWithEmailAndPassword(auth, email, password);
// }

export async function login(email, password) {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch {
        alert("Error!");
    }
}

// export function login(email, password) {
//     return signInWithEmailAndPassword(auth, email, password);
// }

export async function logout(){
    try {
        await signOut(auth)
    } catch {
        alert("Error!");
    }
}

// Custom Hook
export function useAuth() {
    const [ currentUser, setCurrentUser ] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
        return unsub;
    }, [])

    return currentUser;
}

function getUserName(){
    const user = auth.currentUser;
    let str = user.email.substring(0, user.email.indexOf("@"));
    return str;
}

export async function getData() {
    const user = getUserName();
    const notes = collection(db, "Notes");
    const q = query(notes, where("name", "==", user));
    const querySnapshot = await getDocs(q);
    let data = []
    querySnapshot.forEach((doc) => {
        let temp = doc.data();
        temp['id'] = doc.id;
        if (!temp.readStatus) {
            data.push(temp);
        }
    });
    return data;
}

export async function getPrevData() {
    const user = getUserName();
    const notes = collection(db, "Notes");
    const q = query(notes, where("name", "==", user));
    // const q = query(collection(db, "Notes"));
    const querySnapshot = await getDocs(q);
    let data = []
    querySnapshot.forEach((doc) => {
        let temp = doc.data();
        temp['id'] = doc.id;
        if (temp.readStatus) {
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
        'name': item.name,
        'readStatus': true
    });
}






