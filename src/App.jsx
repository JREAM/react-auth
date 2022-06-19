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
import DashboardProjects from "./routes/dashboard/Projects"
import DashboardProjectsCreate from "./routes/dashboard/ProjectsCreate"
import DashboardTasks from "./routes/dashboard/Tasks"
import Navigation from './components/Navigation'
import PageNotFound from "./routes/PageNotFound"

import { AuthProvider } from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

function App() {

  return (
    <div className="app">
      <AuthProvider>
        <BrowserRouter>
        <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            } />
            <Route exact path="/register" element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            } />
            <Route exact path="/forgot_password" element={
              <PublicRoute>
                <ForgotPassword />
              </PublicRoute>
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
      </AuthProvider>
    </div>
  )
}

export default App
