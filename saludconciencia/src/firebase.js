import firebase from 'firebase/app'
//import { getFirestore } from 'firebase/firestore'
import 'firebase/firestore'
//import { collection, query, orderBy, startAfter, limit, getDocs } from "firebase/firestore";
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAWR00NslWFatdQ4sF3BF2uG_HL6bBCv7c",
    authDomain: "prueba-editorjs.firebaseapp.com",
    projectId: "prueba-editorjs",
    storageBucket: "prueba-editorjs.appspot.com",
    messagingSenderId: "930841760288",
    appId: "1:930841760288:web:7c85c1b521381e0e422245"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
//const db2 = getFirestore()
const auth = firebase.auth()

export {firebase, db, auth}

//export {collection, query, orderBy, startAfter, limit, getDocs}