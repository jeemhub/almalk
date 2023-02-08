import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD2KIgpkFqBj4sUfO-XTVfThxbPjHcQr84",
  authDomain: "clone-362322.firebaseapp.com",
  projectId: "amazon-clone-362322",
  storageBucket: "amazon-clone-362322.appspot.com",
  messagingSenderId: "917454311090",
  appId: "1:917454311090:web:3388c6d8f21186817a43ab",
  measurementId: "G-LD6QMBSZHB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)