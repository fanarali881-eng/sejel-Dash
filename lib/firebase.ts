// firebase.ts - Updated configuration for sejel-85d2b project
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAbh52X4b0SalfflrjsW9rLhhs2BCJiOPw",
  authDomain: "sejel-85d2b.firebaseapp.com",
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: "sejel-85d2b",
  storageBucket: "sejel-85d2b.firebasestorage.app",
  messagingSenderId: "767739376005",
  appId: "1:767739376005:web:f965f4a7b7c77d3fb954ec",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { auth, db, database };
