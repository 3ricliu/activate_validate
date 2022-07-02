// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyC3yGPsOtKfMNcBoJGWSAk2ZRjFBhtFc1M",

  authDomain: "activate-validate.firebaseapp.com",

  projectId: "activate-validate",

  storageBucket: "activate-validate.appspot.com",

  messagingSenderId: "305549924099",

  appId: "1:305549924099:web:e77c6ef018e8a5cd3bfb36",

  measurementId: "G-3ZVYX1K7G2",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
