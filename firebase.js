// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJEZElC5qCRC1HxLaqtVpzuSkH7heIP1Y",
  authDomain: "inventory-management-b1647.firebaseapp.com",
  projectId: "inventory-management-b1647",
  storageBucket: "inventory-management-b1647.appspot.com",
  messagingSenderId: "601700908546",
  appId: "1:601700908546:web:f77b1e38702877195e311b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)

export {firestore}