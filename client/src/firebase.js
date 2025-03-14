// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcknwik7k8rMxp54VckCVlS485hSYR1Xo",
  authDomain: "book-club-c4c17.firebaseapp.com",
  projectId: "book-club-c4c17",
  storageBucket: "book-club-c4c17.firebasestorage.app",
  messagingSenderId: "736957416573",
  appId: "1:736957416573:web:74725df068cac513089d14",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
