import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthProvider"

function Register() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [password, setPassword] = useState('')
  const [disabledButton, setDisabledButton] = useState(false)
  const { signUp } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setDisabledButton('disabled')
    setError("")
    try {
      await signUp(email, password)
      navigate("/dashboard")
    } catch (err) {
      setError(err.message)
      setDisabledButton(false)
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

      <div className="container">
        <div className="row">
          <div className="silver column column-50 column-offset-25">

            <h2>Register</h2>
            {error && <div className="error">{error}</div>}

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

              <button className="register" type="submit" disabled={disabledButton}>
                Register
              </button>
            </form>

            <div>
              Already have an account? <Link to="/login">Login</Link> now.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
