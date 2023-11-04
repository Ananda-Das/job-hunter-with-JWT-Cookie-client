// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB08DnjNUzl8X764bQ7R76rBksyhuFb-g0",
  authDomain: "job-hunter-188ab.firebaseapp.com",
  projectId: "job-hunter-188ab",
  storageBucket: "job-hunter-188ab.appspot.com",
  messagingSenderId: "281705281602",
  appId: "1:281705281602:web:21f6b8a56464928cc615db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;