// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI4OxpPSYzATmb7qu21_4GgkW4h9-KXOY",
  authDomain: "knightscrest.firebaseapp.com",
  databaseURL: "https://knightscrest-default-rtdb.firebaseio.com",
  projectId: "knightscrest",
  storageBucket: "knightscrest.appspot.com",
  messagingSenderId: "595850728642",
  appId: "1:595850728642:web:7885d4b5387a97b91d975b",
  measurementId: "G-M4V6P20S2R"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db as default, firebaseConfig };