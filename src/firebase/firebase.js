// Import the functions you need from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9j8iR8bib5hGOgULzxMIS112BMDporlY",
  authDomain: "fitness-tracker-8a25f.firebaseapp.com",
  projectId: "fitness-tracker-8a25f",
  storageBucket: "fitness-tracker-8a25f.firebasestorage.app",
  messagingSenderId: "922312268896",
  appId: "1:922312268896:web:97e4cf73fb8833c6f7b705",
  measurementId: "G-8CJ9V7K6NH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore Database
const db = getFirestore(app);

// Export Firestore
export { db };