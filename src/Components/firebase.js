import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDXqnU4-5lH8taUeUT5oQZ7EP_6nvYRxP4",
  authDomain: "cs394-quickreact-59770.firebaseapp.com",
  databaseURL: "https://cs394-quickreact-59770.firebaseio.com",
  projectId: "cs394-quickreact-59770",
  storageBucket: "cs394-quickreact-59770.appspot.com",
  messagingSenderId: "933886305080",
  appId: "1:933886305080:web:567f0b1e3548f6fb3297cd",
  measurementId: "G-NCRGVKYCPJ"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref();
export default db;
