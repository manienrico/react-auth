// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_2i3h1ssGjlDtN83LNM9SU5sEObZwgys",
  authDomain: "react-auth-tutorial-3e6d2.firebaseapp.com",
  projectId: "react-auth-tutorial-3e6d2",
  storageBucket: "react-auth-tutorial-3e6d2.appspot.com",
  messagingSenderId: "863539350506",
  appId: "1:863539350506:web:21580b2fe10fb5d6128093"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);