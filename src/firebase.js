import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYnTTvb17I-S4sUNnf2k-gnXOVe4DAA30",
  authDomain: "reels-b4673.firebaseapp.com",
  projectId: "reels-b4673",
  storageBucket: "reels-b4673.appspot.com",
  messagingSenderId: "948249218747",
  appId: "1:948249218747:web:922dc1000a5449b143239e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    posts : firestore.collection('posts'),
    comments : firestore.collection('comments'),
    getTimeStamp : firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = firebase.storage()