import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useUserAuth } from "../context/UserAuthContext"

function Register() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [password, setPassword] = useState('')
  const { signUp } = useUserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    try {
      await signUp(email, password)
      navigate("/dashboard")
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="column column-50 column-offset-25">
            <div className='breadcrumbs'>
              <span><Link to="/">Home</Link> / Register</span>
            </div>
          </div>
        </div>
      </div>

      <div className="center-container">
        <div className="inner">
          <h2>Register</h2>
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

            <button className="register__btn" type="submit">
              Register
            </button>
          </form>

          <div>
            Already have an account? <Link to="/login">Login</Link> now.
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
