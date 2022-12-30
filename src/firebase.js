
import firebase,{ initializeApp } from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBnHlUaj8_iZv598jYexzgsp8gr89PP1zE",
  authDomain: "react-blog-904ef.firebaseapp.com",
  projectId: "react-blog-904ef",
  storageBucket: "react-blog-904ef.appspot.com",
  messagingSenderId: "484345234843",
  appId: "1:484345234843:web:2eed98d55c921b4f574d3e"
};

const app = initializeApp(firebaseConfig);
export const firestore = firebase.firestore();