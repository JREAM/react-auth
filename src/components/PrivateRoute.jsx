import React from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from '../context/AuthUserContext'
import LoadingScreen from './LoadingScreen';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth()

  if (typeof user ===  'undefined') {
    // Prevents the non-access page from "flashing"
    <LoadingScreen />
  }
  else if (!user) {
    return <Navigate to="/login" />
  }
  return children
};

export default PrivateRoute;
