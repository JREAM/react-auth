import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthUserContext"
import { useForm } from 'react-hook-form'

function ForgotPassword() {
  document.title = 'Forgot Password'

  const [wasSent, setWasSent] = useState(false)
  const [error, setError] = useState('')
  const { register, handleSubmit, formState: {errors}} = useForm({
    mode: "onBlur"
  })

  const { passwordResetEmail } = useAuth()

  const onError = (data) => {
    console.log('[Form Error]: ', data)
  }

  const onSubmit = async (data) => {
    setError('')
    try {
      await passwordResetEmail(data.email)
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

      <div className="container">
        <div className="row">
          <div className="silver column column-50 column-offset-25">

            <h2>Forgot Password</h2>

            {error && <div className="error">{error}</div>}

            <form onSubmit={handleSubmit(onSubmit, onError)}>

              <div className="form-control">
                <input
                  type="email"
                  placeholder="E-mail Address"
                  {...register("title",
                  {required: "email is Required"})}
                  disabled={wasSent && 'disabled'}
                />
                {errors?.title && <div className="error">{errors.title.message}</div>}
              </div>

              {!wasSent ?
                <button type="submit" className="forgot-password">
                  Send Reset Instructions
                </button>
                :
                <div className="success txt-center">
                  Please check your email for instructions.
                </div>
              }
            </form>

            <div className="mt-20 txt-center">
              Don't have an account? <Link to="/register">Register</Link> now.
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword
