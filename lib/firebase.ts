import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyMockKeyForDevEnvironmentMASGlobal",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "mas-global-ai.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "mas-global-ai",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "mas-global-ai.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "100000000000",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:100000000000:web:abcdef123456",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Prevent multiple Firebase instances
const app = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

// Firestore Database
export const db = getFirestore(app);

// Analytics
export const initAnalytics = async () => {
  if (typeof window !== "undefined") {
    try {
      const { getAnalytics, isSupported } = await import("firebase/analytics");
      const supported = await isSupported();

      if (supported) {
        return getAnalytics(app);
      }
    } catch {
      // Analytics unsupported or running in mock environment
    }
  }

  return null;
};

export default app;