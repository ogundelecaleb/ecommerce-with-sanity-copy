import { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyCTEgDGlvOetzbigX5F8TBH0UxjB6j4uRc",
	authDomain: "ecommerce-app-419b0.firebaseapp.com",
	projectId: "ecommerce-app-419b0",
	storageBucket: "ecommerce-app-419b0.appspot.com",
	messagingSenderId: "265024701845",
	appId: "1:265024701845:web:d0c9d613255d3c6550229c",
	measurementId: "G-C5YKM1B4ZR"
};

if (!getApps.length) {
  initializeApp(firebaseConfig);
  if (typeof window !== "undefined") {
    if ("measurementId" in firebaseConfig) {
      getAnalytics();
    }
  }
}

  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  // measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,