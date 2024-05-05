import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA7m2wxCupucydJ5Cz2h0d4bT7YDYEJKq8",
    authDomain: "netflix-app-f14ac.firebaseapp.com",
    projectId: "netflix-app-f14ac",
    storageBucket: "netflix-app-f14ac.appspot.com",
    messagingSenderId: "610379469963",
    appId: "1:610379469963:web:274e781bb50b623baeb08e",
    measurementId: "G-1N0BRV0X89"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;