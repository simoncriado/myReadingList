import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAQOTZSArGa_SgoVr6WND6RSXVNOppe_dQ",
    authDomain: "readinglistapp-f1d9e.firebaseapp.com",
    projectId: "readinglistapp-f1d9e",
    storageBucket: "readinglistapp-f1d9e.appspot.com",
    messagingSenderId: "431502286360",
    appId: "1:431502286360:web:ac857882dc6ac8a0bced6d"
};

// init firebase
initializeApp(firebaseConfig)

// init firestore
const db = getFirestore()

// init firebase auth
const auth = getAuth()

export { db, auth }