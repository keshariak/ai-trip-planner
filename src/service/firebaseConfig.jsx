// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLza9Fu5QsdFGEDvvau6etX8VLJdcMm4k",
  authDomain: "ai-trip-planner-7766f.firebaseapp.com",
  projectId: "ai-trip-planner-7766f",
  storageBucket: "ai-trip-planner-7766f.firebasestorage.app",
  messagingSenderId: "193203919751",
  appId: "1:193203919751:web:c9b5d7a711662ffed69122",
  measurementId: "G-P49M1XXQSP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)
