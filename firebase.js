// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv4jKms68K1jr69IiKNVbe1DRDoMgmnYA",
  authDomain: "photostart-app.firebaseapp.com",
  projectId: "photostart-app",
  storageBucket: "photostart-app.appspot.com",
  messagingSenderId: "391658778541",
  appId: "1:391658778541:web:23e580328ef0e53855bb24",
  measurementId: "G-X5RH2L35L7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };