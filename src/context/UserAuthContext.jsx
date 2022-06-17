import { createContext, useContext, useEffect, useState } from "react"
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";

const userAuthContext = createContext()

/**
 * These calls are generic in order to set try/catch callbacks
 * within the Components for the status
 */
export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({})

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser)
      setUser(currentuser)
    })

    return () => {
      unsubscribe()
    };
  }, [])

  const googleSignIn = () => {
    const googleAuthProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleAuthProvider)
  }

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth)
  }

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
  }

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  return (
    <userAuthContext.Provider
      value={{
        googleSignIn,
        logIn,
        logOut,
        resetPassword,
        signUp,
        user,
      }}
    >
      {children}
    </userAuthContext.Provider>
  )
}

export function useUserAuth() {
  return useContext(userAuthContext)
}
