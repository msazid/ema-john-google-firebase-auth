// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ3VxFJp5nbD1F8x4X3wYxbOqSmNx4U80",
  authDomain: "ema-john-simple-cdfc9.firebaseapp.com",
  projectId: "ema-john-simple-cdfc9",
  storageBucket: "ema-john-simple-cdfc9.appspot.com",
  messagingSenderId: "879833284229",
  appId: "1:879833284229:web:2eb9bf78dec13a5e0773ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;