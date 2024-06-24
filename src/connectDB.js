// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDqf0oF0mI-WQ3z4waDKuOthDD_jsW8-cQ",
    authDomain: "todo-cd6ca.firebaseapp.com",
    projectId: "todo-cd6ca",
    storageBucket: "todo-cd6ca.appspot.com",
    messagingSenderId: "249398496784",
    appId: "1:249398496784:web:cd4fd5c9fcb7bb67e64495"
};

// Initialize Firebase
const connectDB = initializeApp(firebaseConfig);
const db = getFirestore(connectDB);


export default db;