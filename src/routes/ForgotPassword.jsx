import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useUserAuth } from "../context/UserAuthContext"

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [wasSent, setWasSent] = useState(false)
  const [error, setError] = useState('')

  const { resetPassword } = useUserAuth()
  const navigate = useNavigate()

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
      <div className="center-container">
        <div className="inner">
          <h2>Forgot Password</h2>
          {error && <span>{error}</span>}
          {wasSent && <span>Please check your email for instructions.</span>}

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
