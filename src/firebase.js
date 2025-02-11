import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF83I7KEa_mowsrh5X7VnYNQ4Z8s8iexU",
  authDomain: "my-profile-89a58.firebaseapp.com",
  projectId: "my-profile-89a58",
  storageBucket: "my-profile-89a58.firebasestorage.app",
  messagingSenderId: "440469184760",
  appId: "1:440469184760:web:bd5d5c99e7a51409455b0d",
  measurementId: "G-LQ37DNPBZY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
export { db, collection, addDoc };
