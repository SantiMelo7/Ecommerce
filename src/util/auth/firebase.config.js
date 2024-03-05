// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_NEXT_FIREBASE_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_NEXT_FIREBASE_AUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_NEXT_FIREBASE_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_NEXT_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_NEXT_FIREBASE_SENDERID,
    appId: process.env.NEXT_PUBLIC_NEXT_FIREBASE_APPID
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

const storage = getStorage(app)

//const db = getFirestore(app)

export { app, db, storage }