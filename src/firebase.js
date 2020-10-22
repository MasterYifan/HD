import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBd_P5ndh71WT9--678_q-zqBXa9PhyX00",
  authDomain: "e-com-48ed4.firebaseapp.com",
  databaseURL: "https://e-com-48ed4.firebaseio.com",
  projectId: "e-com-48ed4",
  storageBucket: "e-com-48ed4.appspot.com",
  messagingSenderId: "1050912436246",
  appId: "1:1050912436246:web:48804fa9aece2289ffc537",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
