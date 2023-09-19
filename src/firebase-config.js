import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBKa_XLIXnmmXoicefXev3SVgkH4ce5lzk",
    authDomain: "kemet-3839e.firebaseapp.com",
    projectId: "kemet-3839e",
    storageBucket: "kemet-3839e.appspot.com",
    messagingSenderId: "891623958854",
    appId: "1:891623958854:web:95132d7d5f6d0b258f9d47",
    measurementId: "G-G77VY56VT3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);