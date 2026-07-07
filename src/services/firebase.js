import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDt19EZLMOFr8h618d7NEnZMZnJUou1Vrs",
  authDomain: "batch-1-2-ecommerce-reac-28731.firebaseapp.com",
  projectId: "batch-1-2-ecommerce-reac-28731",
  storageBucket: "batch-1-2-ecommerce-reac-28731.firebasestorage.app",
  messagingSenderId: "990618355870",
  appId: "1:990618355870:web:a7aa640cdff057ffd4d38f",
  measurementId: "G-VBSQ6D7YZZ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);




