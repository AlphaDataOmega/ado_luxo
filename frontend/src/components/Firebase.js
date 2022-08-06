// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaMKE7Ff2Hzyk7rYXHdCxDWblBCDwxh-o",
  authDomain: "ado-c9992.firebaseapp.com",
  projectId: "ado-c9992",
  storageBucket: "ado-c9992.appspot.com",
  messagingSenderId: "751003473284",
  appId: "1:751003473284:web:a900536fe99165109539d1",
  measurementId: "G-J50QRECJDC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);