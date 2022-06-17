import React, { useEffect, useState } from "react"

function Register() {

  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <h2>Home Page</h2>
          <ul>
            <li><b>Todo Items</b></li>
            <li>ProtectedRoute renders the page then redirects. useEffect happens too fast and causes errors before rendering - need to find a work around to not show any of the protected pages.</li>
          </ul>
          <button className='big'>Button</button>
          <button className='big'>Button</button>
          <button className='big'>Button</button>
          <button className='big'>Button</button>
        </div>
      </div>
    </div>
  )
}

export default Register
