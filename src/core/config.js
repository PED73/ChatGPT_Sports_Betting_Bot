// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAobDniT9UQdRFaxIv-K0vZt6islVFgSJw",
  authDomain: "bet-bot-copy.firebaseapp.com",
  projectId: "bet-bot-copy",
  storageBucket: "bet-bot-copy.appspot.com",
  messagingSenderId: "36750563870",
  appId: "1:36750563870:web:18bc7627108413e392ac0f",
  measurementId: "G-K4T8JKBSGQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
