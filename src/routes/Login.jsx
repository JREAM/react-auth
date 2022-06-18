import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthProvider"

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { logIn, googleSignIn } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await logIn(email, password)
      navigate('/dashboard')
    } catch (err) {
      setError(err.message)
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault()
    try {
      await googleSignIn()
      navigate('/dashboard')
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

      <div className="center-container">
        <div className="inner">
          <h2>Login</h2>
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
