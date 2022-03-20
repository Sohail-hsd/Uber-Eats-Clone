import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDkgAgmjLrBH_phIv7YqRUFkswnSg8N6Ag",
  authDomain: "uber-clone-e7f95.firebaseapp.com",
  projectId: "uber-clone-e7f95",
  storageBucket: "uber-clone-e7f95.appspot.com",
  messagingSenderId: "1012225358502",
  appId: "1:1012225358502:web:91e7e9f4124074748ad267",
  measurementId: "G-HVK74E3W1H"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
// !firebase.apps.length ? initializeApp(firebaseConfig) : firebase.app()
// const analytics = getAnalytics(app);

export default firebase 