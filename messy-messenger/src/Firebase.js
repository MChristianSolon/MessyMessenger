import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDUBm1UzFWMIpltKi6mtR3C1BL4SCKKhEI',
  authDomain: 'messymessenger-a37fc.firebaseapp.com',
  databaseURL: 'https://messymessenger-a37fc.firebaseio.com',
  projectId: 'messymessenger-a37fc',
  storageBucket: 'messymessenger-a37fc.appspot.com',
  messagingSenderId: '263629509600',
  appId: '1:263629509600:web:2ca9ab026bd97b1a459185',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let storage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { db, storage, timestamp };
