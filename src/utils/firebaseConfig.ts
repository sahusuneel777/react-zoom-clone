import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "zoom-clone-9f3ea.firebaseapp.com",
  projectId: "zoom-clone-9f3ea",
  storageBucket: "zoom-clone-9f3ea.firebasestorage.app",
  messagingSenderId: "101855685246",
  appId: "1:101855685246:web:acf7c3518d0fde8e54c62f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
