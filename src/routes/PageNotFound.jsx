import { Link } from 'react-router-dom'

function PageNotFound() {

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
            Page Not Found
          </div>
        </div>
      </div>
    </>
  )
}

export default PageNotFound
