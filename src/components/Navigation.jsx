import { Link } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, logout } from "../lib/firebase"

import "../styles/Home.css"

function Navigation() {
  const [user, loading, error] = useAuthState(auth)

  return (
    <nav className="navigation">
      <section className="container">
        <a className="navigation-title" href="/">App</a>
        <ul className="navigation-list">
          <li className="navigation-item"><Link className="navigation-link" to="/">Home</Link></li>
          { !user ?
            <>
              <li className="navigation-item">
                <Link className="navigation-link" to="/login">Login</Link>
              </li>
              <li className="navigation-item">
                <Link className="navigation-link" to="/register">Register</Link>
              </li>
            </>
            :
            <>
              <li className="navigation-item">
                <Link className="navigation-link" to="/dashboard">Dashboard</Link>
              </li>
              <li className="navigation-item">
                <Link className="navigation-link" to="/" onClick={logout}>Log Out</Link>
              </li>
            </>
          }
        </ul>
      </section>
    </nav>
  )
}

export default Navigation
