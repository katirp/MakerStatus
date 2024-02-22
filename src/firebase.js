import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCOGNs7c5WRwqH-R65a0xiGNTcQsG6diP4",
    authDomain: "makerstatus-dd759.firebaseapp.com",
    projectId: "makerstatus-dd759",
    storageBucket: "makerstatus-dd759.appspot.com",
    messagingSenderId: "256848746591",
    appId: "1:256848746591:web:18bd90efb61ee5262423ea",
    measurementId: "G-VXCYDM5VM5"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export default db;