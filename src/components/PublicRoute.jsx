import React from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from '../context/AuthUserContext'
import LoadingScreen from './LoadingScreen'

const PublicRoute = ({ children }) => {
  const { user } = useAuth()

  if (typeof user ===  'undefined') {
    // Prevents the non-access page from "flashing"
    return <LoadingScreen />
  }
  else if (user) {
    return <Navigate to="/dashboard" />
  }
  return children
};

export default PublicRoute;
