import { Link } from 'react-router-dom'
import { useAuth } from "../context/AuthUserContext"

function PageNotFound() {
  document.title = 'Page not Found'
  const { user } = useAuth()

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="column column-50 column-offset-25">
            <div className='breadcrumbs'>
              <span><Link to="/">Home</Link> / Page not Found</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="silver column column-50 column-offset-25">
            <div className="txt-center">
              <b>PAGE NOT FOUND</b>
            </div>
            <p className="txt-center mt-40">
              {user ?
                <>&larr;<Link to="/dashboard"> Back to Dashboard</Link></>
                :
                <>&larr;<Link to="/login">Back to Login</Link></>
              }
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageNotFound
