// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-56346.firebaseapp.com",
  projectId: "mern-estate-56346",
  storageBucket: "mern-estate-56346.firebasestorage.app",
  messagingSenderId: "325341742062",
  appId: "1:325341742062:web:6cd0ac19e69a8973f704ff"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);