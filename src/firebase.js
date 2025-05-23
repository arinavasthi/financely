// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVqPlePFuQU1i4py_KlwjavSRhUXKnuN4",
  authDomain: "financely-de44c.firebaseapp.com",
  projectId: "financely-de44c",
  storageBucket: "financely-de44c.firebasestorage.app",
  messagingSenderId: "789091250488",
  appId: "1:789091250488:web:c0a83436ca8f20653851cd",
  measurementId: "G-V4NT5M0TJW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, db, doc, provider, setDoc };

