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
  // Do not let useState be undefined to fix routing delays
  // See Reference Links at bottom
  const [user, setUser] = useState()

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

// Reference Links
// https://stackoverflow.com/questions/71703922/react-router-dom-unable-to-render-page-but-routes-back-due-to-privateroute/71704109#71704109
// https://stackoverflow.com/questions/70961712/react-router-dom-6-page-redirected-to-sign-in-page-even-when-user-is-signed-in/70961859#70961859
