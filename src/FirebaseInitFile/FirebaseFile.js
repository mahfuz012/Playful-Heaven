
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAR-Ykd1VcIG-q0RcvgLrN23FjIXHQ38Gs",
  authDomain: "playful-heaven.firebaseapp.com",
  projectId: "playful-heaven",
  storageBucket: "playful-heaven.appspot.com",
  messagingSenderId: "229837698522",
  appId: "1:229837698522:web:ddb9db6faf98f83d027ce3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;