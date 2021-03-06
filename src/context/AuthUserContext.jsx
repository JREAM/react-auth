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

const authUserContext = createContext()

export function AuthUserProvider({ children }) {
  // @important State MUST be EMPTY, see bottom of file
  const [user, setUser] = useState()

  useEffect(() => {
    console.log("[AuthUserContext] useEffect")
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("[AuthUserContext] onAuthStateChanged: ", currentuser)
      setUser(currentuser)
    })

    // @important Must return anonymous function otherwise
    //    execution will not happen without a page reload
    return () => {
      unsubscribe()
    }
  }, [])

  const emailSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const emailSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const googleSignIn = () => {
    const googleAuthProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleAuthProvider)
  }

  const passwordResetEmail = (email) => {
    return sendPasswordResetEmail(auth, email)
  }

  const logOut = () => {
    return signOut(auth)
  }

  return (
    <authUserContext.Provider
      value={{
        emailSignIn,
        emailSignUp,
        googleSignIn,
        logOut,
        passwordResetEmail,
        user,
      }}
    >
      {children}
    </authUserContext.Provider>
  )
}

export function useAuth() {
  return useContext(authUserContext)
}

  /**
   * [NOTES: Reference to Auth]
   * https://stackoverflow.com/questions/71703922/react-router-dom-unable-to-render-page-but-routes-back-due-to-privateroute/71704109#71704109
   *
   * The initial currentUser state matches the unauthenticated state, so when the app initially renders, if you are accessing a protected route the redirection will occur because the currentUser state hasn't updated yet.
   *
   * Since onAuthStateChanged returns null for unauthenticated users then I suggest using anything other than null for the initial currentUser state. undefined is a good indeterminant value. You can use this indeterminant value to conditionally render a loading indicator, or nothing at all, while the auth status is confirmed on the initial render.
   */
// Reference Links
// https://stackoverflow.com/questions/71703922/react-router-dom-unable-to-render-page-but-routes-back-due-to-privateroute/71704109#71704109
// https://stackoverflow.com/questions/70961712/react-router-dom-6-page-redirected-to-sign-in-page-even-when-user-is-signed-in/70961859#70961859
