import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth"
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
  signInWithGitHub
} from "../lib/firebase-config"

import "../styles/Login.css"

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, loading, error] = useAuthState(auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return
    }
    if (user) navigate("/dashboard")
  }, [user, loading])

  return (
    <>
      { loading &&
      <div id="loader-container">
        <div id="loader"></div>
      </div>
      }
      <div className="login">
        <div className="login__container">
          <h2>Login</h2>
          <input
            type="text"
            className="login__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <input
            type="password"
            className="login__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button
            className="login__btn"
            onClick={() => logInWithEmailAndPassword(email, password)}
          >
            Login
          </button>
          <button className="login__btn login__google" onClick={signInWithGoogle}>
          <i className="fa-brands fa-google"></i> Login with Google
          </button>
          <button className="login__btn login__github" onClick={signInWithGitHub}>
          <i className="fa-brands fa-github"></i> Login with GitHub
          </button>
          <div>
            <Link to="/forgot_password">Forgot Password</Link>
          </div>
          <div>
            Don't have an account? <Link to="/register">Register</Link> now.
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
