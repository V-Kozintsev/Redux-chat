// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkAyF8MGeSZAvj0wVgHpjKqfAd8YkDOnI",
  authDomain: "reduxchat-1d3e3.firebaseapp.com",
  projectId: "reduxchat-1d3e3",
  storageBucket: "reduxchat-1d3e3.firebasestorage.app",
  messagingSenderId: "957385332622",
  appId: "1:957385332622:web:c88ce2e6d3e1340f53b6df",
  measurementId: "G-EDXDJSR9KZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { app, analytics, db, database };
