import { NavLink } from "react-router-dom"
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
          <li className="navigation-item">
            <NavLink className={({ isActive }) => (isActive ? "navigation-link active" : "navigation-link")} to="/">
              Home
            </NavLink>
          </li>
          { !user ?
            <>
              <li className="navigation-item">
                <NavLink className={({ isActive }) => (isActive ? "navigation-link active" : "navigation-link")} to="/login">
                  Login
                </NavLink>
              </li>
              <li className="navigation-item">
                <NavLink className={({ isActive }) => (isActive ? "navigation-link active" : "navigation-link")} to="/register">
                  Register
                </NavLink>
              </li>
            </>
            :
            <>
              <li className="navigation-item">
                <NavLink className={({ isActive }) => (isActive ? "navigation-link active" : "navigation-link")} to="/dashboard">
                  Dashboard
                </NavLink>
              </li>
              <li className="navigation-item">
                <NavLink className="navigation-link" to="/" onClick={logout}>
                  Log Out
                </NavLink>
              </li>
            </>
          }
        </ul>
      </section>
    </nav>
  )
}

export default Navigation
