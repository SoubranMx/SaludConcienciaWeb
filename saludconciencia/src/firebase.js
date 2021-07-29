import firebase from 'firebase/app'
import 'firebase/firestore'

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

export {firebase, db}