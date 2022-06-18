import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthProvider"

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [wasSent, setWasSent] = useState(false)
  const [error, setError] = useState('')

  const { resetPassword } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    try {
      await resetPassword(email)
      setWasSent(true)
    } catch (err) {
      setError(err.message)
      setWasSent(false)
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="column column-50 column-offset-25">
            <div className='breadcrumbs'>
              <span><Link to="/">Home</Link> / Forgot Password</span>
            </div>
          </div>
        </div>
      </div>

      <div className="center-container">
        <div className="inner">
          <h2>Forgot Password</h2>
          {error && <div className="error">{error}</div>}
          {wasSent && <div className="success">
            Please check your email for instructions.
            </div>}

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
            />
            {!wasSent ?
              <button type="submit">
                Send Reset Instructions
              </button>
              :
              <button type="submit" disabled="disabled">
                Complete
              </button>
            }
          </form>

          <div>
            Don't have an account? <Link to="/register">Register</Link> now.
          </div>

        </div>
      </div>
    </>
  )
}

export default ForgotPassword
