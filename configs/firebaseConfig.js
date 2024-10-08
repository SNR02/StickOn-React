// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "oneshop-35544.firebaseapp.com",
  projectId: "oneshop-35544",
  storageBucket: "oneshop-35544.appspot.com",
  messagingSenderId: "978788597114",
  appId: "1:978788597114:web:632e8395ebb8f81f71eac3",
  measurementId: "G-J2DBBDJQDE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);