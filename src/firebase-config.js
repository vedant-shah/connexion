import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "connexion-e0159.firebaseapp.com",
  projectId: "connexion-e0159",
  storageBucket: "connexion-e0159.appspot.com",
  messagingSenderId: "249618705202",
  appId: "1:249618705202:web:c3426636d1de92f482852b",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
