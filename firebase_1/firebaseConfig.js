/// Import the functions you need from the SDKs you need
import {initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
import {getFirestore } from "firebase/firestore";
//TODO:Add SDKs for Firebase products that you want to use
//https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyAa2reQzZ1rllxfHz-2MCRv61BhckfedFI" ,
authDomain: "dae-demo.firebaseapp.com"
projectId: "dae-demo", storageBucket:
"dae-demo.appspot.com"
messagingSenderId: "533346838697",
appId: "1:533346838697: web: 7bae564b46ae88c04421b8",
｝；
// Initialize Firebase
const app = initializeApp (firebaseConfig) ;
export const authgetAuth (app) ;
export const db = getFirestore(app);

