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
  // User State MUST be null, see [NOTES: Reference to Auth] at the bottom
  const [user, setUser] = useState()


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser)
      setUser(currentuser)
    })

    return unsubscribe()

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

  /**
   * [NOTES: Reference to Auth]
   * https://stackoverflow.com/questions/71703922/react-router-dom-unable-to-render-page-but-routes-back-due-to-privateroute/71704109#71704109
   *
   * The initial currentUser state matches the unauthenticated state, so when the app initially renders, if you are accessing a protected route the redirection will occur because the currentUser state hasn't updated yet.
   *
   * Since onAuthStateChanged returns null for unauthenticated users then I suggest using anything other than null for the initial currentUser state. undefined is a good indeterminant value. You can use this indeterminant value to conditionally render a loading indicator, or nothing at all, while the auth status is confirmed on the initial render.
   */
