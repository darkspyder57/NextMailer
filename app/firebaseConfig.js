// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdR9m_vOlmIAgJHvNTMBx41n5GuU44FMY",
  authDomain: "maildemo-6120e.firebaseapp.com",
  projectId: "maildemo-6120e",
  storageBucket: "maildemo-6120e.appspot.com",
  messagingSenderId: "760158304227",
  appId: "1:760158304227:web:800c8a17e10cae513f52d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};