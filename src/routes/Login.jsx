import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useUserAuth } from "../context/UserAuthContext"

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  //Testing User
  const { user, logIn, googleSignIn } = useUserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await logIn(email, password)
      console.log('[Login]: handleSubmit', user)
      navigate("/dashboard")
    } catch (err) {
      console.log('[Login]: error')
      setError(err.message)
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault()
    try {
      await googleSignIn()
      console.log('[Login]: handleGoogleSignin', user)
      navigate("/dashboard")
    } catch (err) {
      console.log('[Login]: error')
      setError(err.message)
    }
  }

  return (
    <>
      <div className="center-container">
        <div className="inner">
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

            <button className="login" type="submit">
              Login
            </button>
          </form>

          <button
            className="google"
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
