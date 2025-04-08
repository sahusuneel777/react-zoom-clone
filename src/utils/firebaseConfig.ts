import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: "react-auth-6788d.firebaseapp.com",
//   projectId: "react-auth-6788d",
//   storageBucket: "react-auth-6788d.appspot.com",
//   messagingSenderId: "131797845021",
//   appId: "1:131797845021:web:3f7ff4766e2b89ca5d32f4",
//   measurementId: "G-VWPBR1NSLL",
// };

// const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgyqeENAkG3bO4jLML7zOp2RUNIfqT2Ns",
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
