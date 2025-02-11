import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBF83I7KEa_mowsrh5X7VnYNQ4Z8s8iexU",
  authDomain: "my-profile-89a58.firebaseapp.com",
  projectId: "my-profile-89a58",
  storageBucket: "my-profile-89a58.firebasestorage.app",
  messagingSenderId: "440469184760",
  appId: "1:440469184760:web:bd5d5c99e7a51409455b0d",
  measurementId: "G-LQ37DNPBZY",
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, "comments-app");
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };
