import * as firebase from 'firebase'
import 'firebase/storage'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAku5FX_rF_7uf7eORhwGlZeOMsFSYQgoE",
  authDomain: "contatoprojeto-fb18b.firebaseapp.com",
  projectId: "contatoprojeto-fb18b",
  storageBucket: "contatoprojeto-fb18b.appspot.com",
  messagingSenderId: "425733771224",
  appId: "1:425733771224:web:01390343d2204a66862cad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const databse =firebase.firestore()
