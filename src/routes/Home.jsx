import React, { useEffect, useState } from "react"
import { useAuth } from "../context/AuthUserContext"

function Home() {
  document.title = 'Home'

  const { user } = useAuth()

  return (
    <div className="container">
      <div className='breadcrumbs'>
        <span>Home</span>
      </div>

      <div className="row">
        <div className="silver column">
          <h2>Jesse's App Home</h2>

          <div className="warning">
            <ul>
              <li><b>Bugs</b></li>
              <li>- When logged in, going to PublicRoute /login flashes the page. <b>useEffect</b> is running after the render too slow</li>
              <li>- On a logged in page like Dashboard, Projects or Tasks when I refresh it goes to Login then Dashboard, something to do with <b>Public/Private Route</b> with <b>react-router-dom</b> and possibly, this has <b>everything to do with onAuthState</b> being too slow</li>
            </ul>
          </div>
          {user?.email &&
          <div className="success">
            Testing, is user logged? <b>{user?.email}</b>
          </div>
          }

          <p>
            This is a study and exercise to re-familiarize and keep myself sharp with <b>functional</b> programming which requires a completely different mindset than <b>object-oriented</b> programming. Since I find it a bit more difficult to retain and memorize than other programming styles I like to build miniature projects.
            </p>
            <p>
              Functional programming has different design paradigm; Yet, many similarities such as the goal of generic re-usable components (or OOP classes) as well as many common patterns and anti-patterns with some deviations.
          </p>
          <p>
            This is an on-going practice and not meant to be visually impressive. Instead my goal is to be technologically sound with my source code in app development because it's a revolving process of unending learning, but I enjoy it.
            </p>
            <p>
              You can see my code on GitHub at <a href="https://github.com/JREAM/react-auth">https://github.com/JREAM/react-auth</a>
          </p>
          <ul>
            <li><b>Written using some of the following technologies:</b></li>
            <li><a href="https://vitejs.dev/">Vite</a></li>
            <li><a href="https://reactjs.org/docs/getting-started.html">React JS 18+</a>
              <ul>
                <li><a href="https://reactrouterdotcom.fly.dev/docs/en/v6">React Router DOM</a></li>
                <li><a href="https://react-hook-form.com/get-started">React Hook Form</a></li>
              </ul>
            </li>
            <li><a href="https://firebase.google.com/">Google Firebase</a>
              <ul>
              <li><a href="https://firebase.google.com/docs/auth/">Authentication</a>
              </li>
                <li><a href="https://firebase.google.com/docs/firestore/">Cloud Firestore</a></li>
              </ul>
            </li>
            <li><a href="https://fonts.google.com/">Google Fonts</a></li>
            <li><a href="https://milligram.io/">Milligram CSS</a></li>
          </ul>
        </div>
      </div>


      <div className="row mt-40">
        <div className="column">
          <h3>Misc Element Sample</h3>
          <div className="info">Info message</div>
          <div className="warning">Warning message</div>
          <div className="error">Error message</div>
          <div className="success">Success message</div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <button>Simple</button>
        </div>
        <div className="column">
          <button>Cute</button>
        </div>
        <div className="column">
          <button>Happy</button>
        </div>
        <div className="column">
          <button>Button</button>
        </div>
      </div>
    </div>
  )
}

export default Home
