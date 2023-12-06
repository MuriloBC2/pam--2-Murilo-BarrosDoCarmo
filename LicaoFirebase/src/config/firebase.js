import firebase from "firebase/compat/app";
import 'firebase/storage'
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyAku5FX_rF_7uf7eORhwGlZeOMsFSYQgoE",
  authDomain: "contatoprojeto-fb18b.firebaseapp.com",
  projectId: "contatoprojeto-fb18b",
  storageBucket: "contatoprojeto-fb18b.appspot.com",
  messagingSenderId: "425733771224",
  appId: "1:425733771224:web:01390343d2204a66862cad"
};
const app = initializeApp(firebaseConfig);

export const database = firebase.firestore()
