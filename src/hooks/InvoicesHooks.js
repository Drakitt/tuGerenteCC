import firebaseApp from '../firebase-config';
import { getFirestore, collection, query, getDocs, doc, onSnapshot, limit, orderBy, startAfter } from 'firebase/firestore';

const db = getFirestore(firebaseApp);

async function getAll() {  
   
        const docRef = collection(db, "Invoice");
        let lastKey = "";
        
        const q = query(docRef, orderBy('id'), limit(20));
        const querySnapshot = await getDocs(q);
            return querySnapshot.docs.map(doc => {
            lastKey = doc.data().id;
            return { ...doc.data(), id: doc.id, lastKey};
        });

}

async function getAllNext(e) {  
   
        const docRef = collection(db, "Invoice");
        let lastKey = "";
        console.log("xdddddd", e);
        const q = query(docRef, orderBy('id'), limit(e+20));
        const querySnapshot = await getDocs(q);
            return querySnapshot.docs.map(doc => {
            lastKey = doc.data().id;
            return { ...doc.data(), id: doc.id, lastKey};
        });

}

async function getOne(id) {

    return new Promise((resolve, reject) => {
        const docRefx = doc(db, 'Invoice', id);
        const unsub = onSnapshot(docRefx, (doc) => {
            resolve(doc.data());
        });
       
    })
}



export {
    getAll,
    getAllNext,
    getOne
}