import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useUserAuth } from "../context/UserAuthContext"

function Navigation() {
  const { logOut, user } = useUserAuth()
  const navigate = useNavigate()

  const handleLogout = async (e) => {
    try {
      await logOut()
      navigate("/")
    } catch (error) {
      console.log('[Navigation] handleLogout: ', error.message)
    }
  };

  return (
    <nav className="navigation">
      <section className="container">
        <span className="navigation-title"><b>My App</b></span>
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
                <a className="navigation-link" href="/" onClick={handleLogout}>
                  Logout
                </a>
              </li>

            </>
          }
        </ul>
      </section>
    </nav>
  )
}

export default Navigation
