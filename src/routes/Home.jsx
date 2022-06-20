function Home() {
  document.title = 'Home'

  return (
    <div className="container">
      <div className='breadcrumbs'>
        <span>Home</span>
      </div>

      <div className="row">
        <div className="silver column">
          <h2>Development in React</h2>


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

          <div className="warning">
            <ul>
              <li><b>Bugs</b></li>
              <li>- Best place for business logic? Perhaps a <b>/lib</b> area where <b>await function</b> calls are prepared and the try/catch is within the component.</li>
              <li>- Firestore is not as fun to use as standard SQL, finding the API a little annoying with snapshots and iterating a method to get data.</li>
            </ul>
          </div>
          <div className="info">
            <ul>
              <li><b>Fixes</b></li>
              <li>+ Fixed route screen flashing from <b>Auth State</b> not being ready before ProtectedRoute render by adding a loading screen, works great!</li>
              <li>+ Fixed page refresh under re-routing any protected pages back to the dashboard. With <b>Auth (typeof user === undefined)</b> it prevents all problems.</li>
            </ul>
          </div>

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
