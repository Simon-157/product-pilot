import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyD1DoKsd2rBX1jcosAuNbvl-ee_m_aYAAI",
    authDomain: "product-pilot.firebaseapp.com",
    projectId: "product-pilot",
    storageBucket: "product-pilot.appspot.com",
    messagingSenderId: "140875741642",
    appId: "1:140875741642:web:60b7706b9cdb3afa573733"
  };

const app = initializeApp(firebaseConfig);

export const firebaseApp = app;
export const firestore = getFirestore(app);
