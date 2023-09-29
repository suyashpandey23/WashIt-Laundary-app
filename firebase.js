import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAZdHgCOtb6garZvMP9sCXAx80Oe5pjHRo",
  authDomain: "laundary-application-12794.firebaseapp.com",
  projectId: "laundary-application-12794",
  storageBucket: "laundary-application-12794.appspot.com",
  messagingSenderId: "808751626249",
  appId: "1:808751626249:web:1c122fe3dc332402b7e0d8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
