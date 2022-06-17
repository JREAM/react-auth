import React, { useEffect, useState } from "react"

function Register() {

  return (
    <div className="container">
      <div className='breadcrumbs'>
        <span>Home</span>
      </div>

      <div className="row">
        <div className="column">
          <h2>Home Page</h2>
          <ul>
            <li><b>Todo Items</b></li>
            <li>ProtectedRoute renders the page then redirects. useEffect happens too fast and causes errors before rendering - need to find a work around to not show any of the protected pages. (<b>Seemds to be fixed by a undefined/null value from state on onAuthChange</b></li>
            <li>I need PublicOnly routes so when logged in they cannot go to the login/register/forgot password page.</li>
          </ul>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
        </div>
      </div>
    </div>
  )
}

export default Register
