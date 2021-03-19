import firebase from "firebase/app";
import "firebase/auth";
// import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDzynE_3BmSw7UN08Ee9YaaZrGt7S5gLgk",
  authDomain: "simple-notes-firebase-prawito.firebaseapp.com",
  projectId: "simple-notes-firebase-prawito",
  storageBucket: "simple-notes-firebase-prawito.appspot.com",
  messagingSenderId: "149539541878",
  appId: "1:149539541878:web:e1b41be8b9ba084d462057",
  measurementId: "G-4LZ7JLCFY2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
