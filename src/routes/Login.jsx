import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useUserAuth } from "../context/UserAuthContext"

import "../styles/Login.css"

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { logIn, googleSignIn } = useUserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password)
      navigate("/dashboard")
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
      <div className="login">
        <div className="login__container">
          <h2>Login</h2>
          {error && <span>{error}</span>}

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />

            <button className="login__btn" type="submit">
              Login
            </button>
          </form>

          <button
            className="login__btn login__google"
            onClick={handleGoogleSignIn}
          >
            <i className="fa-brands fa-google"></i> Login with Google
          </button>

          {/* <button className="login__btn login__github" >
          <i className="fa-brands fa-github"></i> Login with GitHub
          </button> */}
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
