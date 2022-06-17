import React, { useEffect, useState } from "react"

import "../styles/Home.css"

function Register() {

  return (
    <div className="home">
      <div className="home__container">
        <h2>Home Page</h2>
        <ul>
          <li><b>Todo Items</b></li>
          <li>ProtectedRoute renders the page then redirects. useEffect happens too fast and causes errors before rendering - need to find a work around to not show any of the protected pages.</li>
        </ul>
      </div>
    </div>
  )
}

export default Register
