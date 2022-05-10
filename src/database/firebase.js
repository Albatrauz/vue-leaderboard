// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGOaKd_yCkH1sJe3EJjjsP-rv3FxpIId4",
  authDomain: "leaderboard-pubquiz.firebaseapp.com",
  databaseURL:
    "https://leaderboard-pubquiz-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "leaderboard-pubquiz",
  storageBucket: "leaderboard-pubquiz.appspot.com",
  messagingSenderId: "918833541796",
  appId: "1:918833541796:web:4a4143944a62ea6146ac31",
  measurementId: "G-NB576PP2XW",
};

export default firebaseConfig;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
