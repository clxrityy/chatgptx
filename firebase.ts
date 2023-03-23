import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCO4saeNajeJwu48myh3nE2ueq-ruFJ11A",
    authDomain: "chatgpt-msg-4efb9.firebaseapp.com",
    projectId: "chatgpt-msg-4efb9",
    storageBucket: "chatgpt-msg-4efb9.appspot.com",
    messagingSenderId: "750566719029",
    appId: "1:750566719029:web:eaf41b1ba4a025d45b7b7c"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };