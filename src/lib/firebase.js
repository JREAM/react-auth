import { initializeApp } from "firebase/app"
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth"
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBtnQVzSkfvj5Vr7jvR1mEKfqV-uaQ-HEg",
  authDomain: "react-inventory-29553.firebaseapp.com",
  projectId: "react-inventory-29553",
  storageBucket: "react-inventory-29553.appspot.com",
  messagingSenderId: "32793694475",
  appId: "1:32793694475:web:1dc035dc481eedc7ef520e",
  measurementId: "G-19T39H71Y7"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider)
    const user = res.user
    const q = query(collection(db, "users"), where("uid", "==", user.uid))
    const docs = await getDocs(q)
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      })
    }
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
}

const signInWithGitHub = async () => {
  try {
    const res=await signInWithPopup(auth, githubProvider)
    const user = res.user
    const q = query(collection(db, "users"), where("uid", "==", user.uid))
    const docs = await getDocs(q)
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      })
    }
  } catch (err) {
    console.log(err)
    alert(err.message)
  }
}

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
}

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    })
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
}

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email)
    alert("Password reset link sent!")
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
}

const logout = () => {
  signOut(auth)
}

export {
  auth,
  db,
  signInWithGoogle,
  signInWithGitHub,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
}
