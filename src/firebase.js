import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

//firebase config fields and keys
const firebaseConfig = {

 
  
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();