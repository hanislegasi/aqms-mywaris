import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {

apiKey: "AIzaSyCR3hpOyMowg4yLMxBw3Iu3QkepGvSE0MU",
authDomain: "alqawthar-mywaris.firebaseapp.com",
projectId: "alqawthar-mywaris",
storageBucket: "alqawthar-mywaris.firebasestorage.app",
messagingSenderId: "3498810778",
appId: "1:3498810778:web:ee36e0fe42f76698046e23"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
