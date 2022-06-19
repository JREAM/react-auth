import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthProvider"
import { useForm } from 'react-hook-form'

function Login() {
  const [error, setError] = useState('')
  const { user, emailSignIn, googleSignIn } = useAuth()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: {errors}} = useForm({
    mode: "onBlur"
  })

  const onSubmit = async (data) => {
    setError('')
    try {
      await emailSignIn(data.email, data.password)
      navigate('/dashboard')
      console.log('[Login:Email] Redirect to Dashboard')
    } catch (err) {
      console.log(err)
      setError(err.message)
    }
  }

  const onError = (data) => {
    console.log('[Form Error]: ', data)
  }

  const handleGoogleSignIn = async (e) => {
    e.preventDefault()
    try {
      console.log('[Login:Google] Before Google Signin')
      console.log('[Login:Google] user: ', user)
      await googleSignIn()
      console.log('[Login:Google] After Google Signin')
      console.log('[Login:Google] user: ', user)
      navigate('/dashboard')
      console.log('[Login:Google] Redirect to Dashboard')
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
              <span><Link to="/">Home</Link> / Login</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="silver column column-50 column-offset-25">

            <h2>Login</h2>
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

              <button className="login" type="submit">
                Login
              </button>
            </form>

            <button
              className="google"
              onClick={handleGoogleSignIn}
            >
              <i className="fa-brands fa-google"></i>
              Login with Google
            </button>

            {/* <button className="login__btn login__github" >
            <i className="fa-brands fa-github"></i> Login with GitHub
            </button> */}

            <div className="mt-20 txt-center">
              Don't have an account? <Link to="/register">Register</Link> now.
            </div>

            <div className="mt-20 txt-center">
              <Link to="/forgot_password">Forgot Password</Link>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Login
