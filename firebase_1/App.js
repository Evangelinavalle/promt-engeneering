import {useState } from "react";
import “•/styles.css";
import {db} from "../firebaseConfig"; // Import firebase instead of
import {addDoc, collection } from "firebase/firestore";
import {
getAuth, createUserWithEmailAndPassword, SignInWithEmailAndPassword,
｝
from "firebase/auth";

export default function App() {

const [email, setEmaill = useState("");
const [password, setPassword] = useState("");
const [displayName, setDisplayName] = useState("");
const
handleSignUp = async
=
const auth = getAuth);
createUserWithEmailAndPassword (auth, email, password)
•then ( (userCredential)  =>｛
// Signed up
const user = userCredential. user;
// ...
// Add user's display name to Firestore
addDoc (collection(db, "users"), {
    uid:
    user. uid, displayName: displayName,
})