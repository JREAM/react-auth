import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"
import Home from "./routes/Home"
import Login from "./routes/Login"
import Register from "./routes/Register"
import ForgotPassword from "./routes/ForgotPassword"
import Dashboard from "./routes/Dashboard"
import DashboardProjectsCreate from "./routes/dashboard/ProjectsCreate"
import DashboardTasks from "./routes/dashboard/Tasks"
import DashboardProjects from "./routes/dashboard/Projects"
import PageNotFound from "./routes/PageNotFound"
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
            <Route exact path="/forgot_password" element={<ForgotPassword />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/dashboard/projects/create" element={<DashboardProjectsCreate />} />
            <Route exact path="/dashboard/tasks" element={<DashboardTasks />} />
            <Route exact path="/dashboard/projects" element={<DashboardProjects />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
