import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyCR3hpOyMowg4yLMxBw3Iu3QkepGvSE0MU",
    authDomain: "alqawthar-mywaris.firebaseapp.com",
    projectId: "alqawthar-mywaris",
    storageBucket: "alqawthar-mywaris.firebasestorage.app",
    messagingSenderId: "3498810778",
    appId: "1:3498810778:web:ee36e0fe42f76698046e23"
};

// 1. Cipta 'app' dahulu
const app = initializeApp(firebaseConfig);

// 2. Barulah eksport semuanya berdasarkan 'app' di atas
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
