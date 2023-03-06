import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

//firebase config fields and keys
const firebaseConfig = {

 
   //copy from project in firebase console settings.
  
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
