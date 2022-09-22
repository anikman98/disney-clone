import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBI0RKFVHyufoNfaLPWLzEb6pd368ncUgI",
    authDomain: "hotstar-clone-59df3.firebaseapp.com",
    projectId: "hotstar-clone-59df3",
    storageBucket: "hotstar-clone-59df3.appspot.com",
    messagingSenderId: "11520669839",
    appId: "1:11520669839:web:44dd2151ac672f99ae58fa",
    measurementId: "G-HGGGCQ7HPX"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export {auth, provider, storage};
export default db;