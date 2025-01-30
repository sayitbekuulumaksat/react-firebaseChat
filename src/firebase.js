// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-EZemJAAOHiNMyu8Yht5YZGiEA9rJ_AQ",
  authDomain: "unichat-b2258.firebaseapp.com",
  projectId: "unichat-b2258",
  storageBucket: "unichat-b2258.firebasestorage.app",
  messagingSenderId: "302572716711",
  appId: "1:302572716711:web:d552818060f2faa9985182"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);