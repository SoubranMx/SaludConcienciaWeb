import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    // Test
    // apiKey: "AIzaSyAWR00NslWFatdQ4sF3BF2uG_HL6bBCv7c",
    // authDomain: "prueba-editorjs.firebaseapp.com",
    // projectId: "prueba-editorjs",
    // storageBucket: "prueba-editorjs.appspot.com",
    // messagingSenderId: "930841760288",
    // appId: "1:930841760288:web:7c85c1b521381e0e422245"
    
    //Deploy
    apiKey: "AIzaSyC2fCz_gNhMUO2mDwT--04KgBFIThLCTQI",
    authDomain: "saludconciencia-53c0a.firebaseapp.com",
    projectId: "saludconciencia-53c0a",
    storageBucket: "saludconciencia-53c0a.appspot.com",
    messagingSenderId: "759473753418",
    appId: "1:759473753418:web:f926117bbc1a52828f45b3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { firebase, db, auth, storage }