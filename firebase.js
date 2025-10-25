// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAo6S_Weu2OYs2ZYWlz6p4G5OVDA9l_ZZM",
    authDomain: "emergency-response-f5347.firebaseapp.com",
    databaseURL: "https://emergency-response-f5347-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "emergency-response-f5347",
    storageBucket: "emergency-response-f5347.firebasestorage.app",
    messagingSenderId: "609774329333",
    appId: "1:609774329333:web:038694be26c79794cc94bc",
    measurementId: "G-VEQ4JG0N16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };
