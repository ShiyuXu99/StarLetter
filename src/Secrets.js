import { initializeApp, getApps } from 'firebase/app';
import {
    initializeFirestore,collection, getDocs, query,
    doc, addDoc, getDoc, onSnapshot, orderBy, limit
} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAsrXo0XBf8srEnJ3ZdVC2_X9TK4MRb4jQ",
    authDomain: "star-letter-2020.firebaseapp.com",
    projectId: "star-letter-2020",
    storageBucket: "star-letter-2020.appspot.com",
    messagingSenderId: "755999183317",
    appId: "1:755999183317:web:fef717a13e923035832d5c"
};


const app = initializeApp(firebaseConfig);
// if (getApps().length == 0){
//     app = initializeApp(firebaseConfig);
// }
export const db = initializeFirestore(app, {
    useFetchStreams: false
});
