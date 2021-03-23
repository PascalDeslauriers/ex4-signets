import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyCYeJ6tuiyK3qDQ_9U5RXmlBRB1PjK1nvw",
  authDomain: "firestore-48864.firebaseapp.com",
  projectId: "firestore-48864",
  storageBucket: "firestore-48864.appspot.com",
  messagingSenderId: "1068277369514",
  appId: "1:1068277369514:web:607063896317a7d19a5ed3"
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser Firestore
export const firestore = firebase.firestore();
