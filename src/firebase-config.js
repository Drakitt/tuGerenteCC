import { initializeApp } from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDKj-V6NvGBRBI6Vr3nIJ-d05tl6at8QpI",
  authDomain: "tugerente-d2c0a.firebaseapp.com",
  projectId: "tugerente-d2c0a",
  storageBucket: "tugerente-d2c0a.appspot.com",
  messagingSenderId: "45312355582",
  appId: "1:45312355582:web:4ffe161b33f75c0e9849af",
  measurementId: "G-7B8GJZM0V4"
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;