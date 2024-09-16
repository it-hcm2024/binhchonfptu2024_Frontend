// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import { GoogleAuthProvider } from "firebase/auth";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-yxG-aFqHOLGmxancM2CfSgGqU5EjHdk",
  authDomain: "binhchonfptu2024.firebaseapp.com",
  projectId: "binhchonfptu2024",
  storageBucket: "binhchonfptu2024.appspot.com",
  messagingSenderId: "854639972187",
  appId: "1:854639972187:web:b7c822122f9c916fae547e",
  measurementId: "G-MTFH7ZN21N",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = firebase.auth();
const provider = new GoogleAuthProvider();
export { auth };
export default firebase;
