import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

import { getFirestore, setDoc, doc, collection, addDoc, getDocs, getDoc, where, query, startAt, endAt, orderBy } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMzS9F_4ryPVlAymrMa5g4ATE9PmueeVc",
  authDomain: "distribuidorasoto-1dac3.firebaseapp.com",
  projectId: "distribuidorasoto-1dac3",
  storageBucket: "distribuidorasoto-1dac3.appspot.com",
  messagingSenderId: "947105004271",
  appId: "1:947105004271:web:d77d9640c1f4cc195f391a",
  measurementId: "G-KQRF59XXZX",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  app,
  auth,
  db,
  setDoc,
  doc,
  addDoc,
  collection,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  getDocs,
  getDoc,
  where,
  query,
  startAt, 
  endAt,
  orderBy
};
