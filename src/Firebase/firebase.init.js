// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYK58bKLV8_EHfLwSTHtOqTMMkHNaXshs",
  authDomain: "fir-operation-2.firebaseapp.com",
  projectId: "fir-operation-2",
  storageBucket: "fir-operation-2.firebasestorage.app",
  messagingSenderId: "387479456888",
  appId: "1:387479456888:web:7a65f426938919d5aeb18d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;