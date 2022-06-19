import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthProvider"
import { useForm } from 'react-hook-form'

function Register() {
  document.title = 'Register'

  const [error, setError] = useState('')
  const [disabledButton, setDisabledButton] = useState(false)
  const { emailSignUp } = useAuth()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: {errors}} = useForm({
    mode: "onBlur"
  })

  const onSubmit = async (data) => {
    e.preventDefault()
    setDisabledButton('disabled')
    setError('')
    try {
      await emailSignUp(data.email, data.password)
      navigate("/dashboard")
    } catch (err) {
      setError(err.message)
      setDisabledButton(false)
    }
  }

  const onError = (data) => {
    console.log('[Form Error]: ', data)
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

            <form onSubmit={handleSubmit(onSubmit, onError)}>

              <div className="form-control">
                <input
                  type="email"
                  placeholder="E-mail Address"
                  {...register("email",
                  {required: "Email is Required"})}
                  className={errors?.email && 'error'}
                />
                {errors?.email && <span className="error">{errors.email.message}</span>}
              </div>
              <div className="form-control">
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password",
                  {required: "Password is Required"})}
                  className={errors?.password && 'error'}
                />
                {errors?.password && <span className="error">{errors.password.message}</span>}
              </div>

              <button className="register" type="submit" disabled={disabledButton}>
                Register
              </button>
            </form>

            <div className="mt-20 txt-center">
              Already have an account? <Link to="/login">Login</Link> now.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
