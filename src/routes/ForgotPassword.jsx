import React, { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { auth, sendPasswordReset } from "../lib/firebase"

import "../styles/ForgotPassword.css"

function ForgotPassword() {
  const [email, setEmail] = useState("")
  const [user, loading, error] = useAuthState(auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (loading) return
    if (user) navigate("/dashboard")
  }, [user, loading])

  return (
    <>
      { loading &&
      <div id="loader-container">
        <div id="loader"></div>
      </div>
      }
      <div className="forgot_password">
        <div className="forgot_password__container">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <button onClick={() => sendPasswordReset(email)}>
            Send password Reset Email
          </button>

          <div>
            Don't have an account? <Link to="/register">Register</Link> now.
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword
