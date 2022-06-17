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

import { UserAuthContextProvider } from "./context/UserAuthContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {

  return (
    <div className="app">
      <UserAuthContextProvider>
        <BrowserRouter>
        <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={
                <Login />
            } />
            <Route exact path="/register" element={
                <Register />
            } />
            <Route exact path="/forgot_password" element={
                <ForgotPassword />
            } />
            <Route exact path="/dashboard" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } />
            <Route exact path="/dashboard/projects/create" element={
              <PrivateRoute>
                <DashboardProjectsCreate />
              </PrivateRoute>
            } />
            <Route exact path="/dashboard/tasks" element={
              <PrivateRoute>
                <DashboardTasks />
              </PrivateRoute>
            } />
            <Route exact path="/dashboard/projects" element={
              <PrivateRoute>
                <DashboardProjects />
              </PrivateRoute>
            } />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </UserAuthContextProvider>
    </div>
  )
}

export default App
