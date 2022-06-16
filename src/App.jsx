import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"
import Home from "./routes/Home"
import Login from "./routes/Login"
import Register from "./routes/Register"
import Reset from "./routes/ForgotPassword"
import Dashboard from "./routes/Dashboard"
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
