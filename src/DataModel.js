import { initializeApp, getApps } from 'firebase/app';
import {
    initializeFirestore, collection, getDocs, query,
    doc, addDoc, getDoc, onSnapshot, orderBy, limit
} from "firebase/firestore";
import { db } from './Secrets';


let nextKey = 1;
function getNextKey() {
    return '' + nextKey++;
}


class DataModel {


    async addItem(item) {
        item.key = getNextKey();
        const collRef = collection(db, 'ListItems');
        // let element = {
        //   text: item.text,
        //   complete: item.complete,
        //   priorityLevel: item.complete,
        //   key: item.key
        // };
        let docRef = await addDoc(collRef, item);
    }

    async getItem() {
        return 1;
    }
}


let theDataModel;

export function getDataModel() {
    if (!theDataModel) {
        theDataModel = new DataModel();
    }
    return theDataModel;
}