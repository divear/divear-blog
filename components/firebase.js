// Import the functions you need from the SDKs you need

import { initializeApp, getApps } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_API_KEY,

	authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,

	projectId: process.env.NEXT_PUBLIC_PROJECTID,

	storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,

	messagingSenderId: process.env.NEXT_PUBLIC_SENDERID,
	measurementId: process.env.NEXT_PUBLIC_TRACKID,

	appId: process.env.NEXT_PUBLIC_APPID,
};

// Initialize Firebase

if (firebase.apps.length === 0) {
	initializeApp(firebaseConfig);
}
const app = initializeApp(firebaseConfig);

export { app, getFirestore, collection, addDoc, getAnalytics, logEvent };
